import { ElasticBeanstalkClient } from '@aws-sdk/client-elastic-beanstalk';

export const awsElasticBeanStalkClient = (): ElasticBeanstalkClient => {
  const client = new ElasticBeanstalkClient({
    region: process.env.AWS_DEFAULT_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
    },
  });
  return client;
};
