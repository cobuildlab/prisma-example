import slugify from 'slugify';
import {
  DescribeEnvironmentsCommand,
  TerminateEnvironmentCommand,
} from '@aws-sdk/client-elastic-beanstalk';
import { awsElasticBeanStalkClient } from '../shared/aws-eb';
import { Client } from 'pg';

export const featureBranchDown = async (): Promise<void> => {
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
  console.log(response);

  if (!(response.Environments?.length === 0)) {
    console.log('TERMINATE ENV::', branch);
    const terminateCommand = new TerminateEnvironmentCommand({
      EnvironmentName: branch,
      TerminateResources: true,
    });

    try {
      await client.send(terminateCommand);
    } catch (e) {
      console.log(e);
    }
  }

  // POSTGRES
  const connectionString = process.env.AWS_DATABASE_URL ?? '';
  console.log('CONNECTION STRING:', connectionString);
  const pgClient = new Client({
    connectionString,
  });
  await pgClient.connect();

  const res = await pgClient.query('SELECT 1 FROM pg_database WHERE datname=$1', [branch]);
  console.log('RES:', res);

  if (res.rowCount >= 0) {
    const sql = `DROP DATABASE ${branch}`;
    console.log('DROP DATABASE:', sql);
    try {
      await pgClient.query(sql);
    } catch (e) {
      console.log(e);
    }
  }
  process.exit(0);
};
featureBranchDown().then(console.log).catch(console.error);
