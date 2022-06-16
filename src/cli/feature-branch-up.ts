import slugify from 'slugify';
import { DescribeEnvironmentsCommand } from '@aws-sdk/client-elastic-beanstalk';
import { execSync } from 'child_process';
import { Client } from 'pg';
import { featureBranchDown } from './feature-branch-down';
import { awsElasticBeanStalkClient } from '../shared/aws-eb';
import * as github from '@actions/github';

const featureBranchUp = async (): Promise<void> => {
  const branch = slugify(process.env.GITHUB_BRANCH_NAME ?? '', {
    replacement: '_', // replace spaces with replacement character, defaults to `-`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
  console.log('BRANCH:', branch);
  console.log('ENV::', JSON.stringify(process.env, null, 2));
  const client = awsElasticBeanStalkClient();
  const command = new DescribeEnvironmentsCommand({
    EnvironmentNames: [branch],
  });

  const response = await client.send(command);
  console.log('Describe Environment:', response);

  // Setting AWS environment variables
  execSync(`export AWS_DEFAULT_REGION=${process.env.AWS_DEFAULT_REGION ?? ''}`);
  execSync(`export AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID ?? ''}`);
  execSync(`export AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY ?? ''}`);

  if (response.Environments?.length === 0) {
    console.log('CREATE ENVIRONMENT:');
    console.log(execSync('eb list').toString());
    console.log(execSync('eb use api-main').toString());
    console.log(execSync(`eb clone api-main -n ${branch} -c ${branch}`).toString());
  }

  console.log(execSync(`eb use ${branch}`).toString());
  console.log(execSync(`eb status`).toString());
  console.log(execSync(`eb deploy ${branch}`).toString());

  // POSTGRES
  const connectionString = process.env.AWS_DATABASE_URL ?? '';
  console.log('CONNECTION STRING:', connectionString);
  const pgClient = new Client({
    connectionString,
  });
  await pgClient.connect();

  const res = await pgClient.query('SELECT 1 FROM pg_database WHERE datname=$1', [branch]);
  console.log('RES:', res);

  if (res.rowCount === 0) {
    const sql = `CREATE DATABASE ${branch}`;
    console.log('CREATE DATABASE:', sql);
    try {
      await pgClient.query(sql);
    } catch (e) {
      console.log(e);
      await featureBranchDown();
      return;
    }
  }
  // SETTING THE DATABASE URL
  const lastSlashIndex = connectionString.lastIndexOf('/');
  const newDbString = connectionString.substring(0, lastSlashIndex) + `/${branch}?schema=public`;
  console.log('newDbString:', newDbString);
  execSync(`export DATABASE_URL=${newDbString}`);
  execSync(`npm run prisma-migrate`);

  console.log(execSync(`eb setenv DATABASE_URL=${newDbString}`).toString());
  const status = execSync(`eb status`).toString();
  console.log('STATUS:', status);
  // Put info on a Github comment

  const octokit = github.getOctokit(process.env.GITHUB_TOKEN ?? '');
  const githubRepo = process.env.GITHUB_REPOSITORY ?? '';
  const slashIndex = githubRepo.lastIndexOf('/');
  await octokit.rest.issues.createComment({
    owner: githubRepo.substring(0, slashIndex),
    repo: githubRepo.substring(slashIndex + 1),
    issue_number: parseInt(process.env.GITHUB_PULL_REQUEST_NUMBER ?? ''),
    body: status,
  });
  process.exit(0);
};
featureBranchUp().then(console.log).catch(console.error);
