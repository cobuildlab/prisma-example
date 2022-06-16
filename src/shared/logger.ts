import winston from 'winston';
import WinstonCloudWatch, { CloudwatchTransportOptions } from 'winston-cloudwatch';
import AWS from 'aws-sdk';
import { MiddlewareInterface, NextFn, ResolverData } from 'type-graphql';
import { GraphqlContext } from '../index';
import { createEventLog } from '../modules/event-log/services';
import { Prisma } from '@prisma/client';

export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [new winston.transports.Console({ level: 'debug' })],
});

if (process.env.AWS_CLOUDWATCH_ENABLE !== undefined) {
  AWS.config.update({
    region: process.env.AWS_REGION,
  });
  const cloudwatchConfig: CloudwatchTransportOptions = {
    name: 'cobuildlab Backend',
    logGroupName: process.env.AWS_CLOUDWATCH_GROUP_NAME as string,
    logStreamName: `${process.env.AWS_CLOUDWATCH_GROUP_NAME ?? ''}-${process.env.NODE_ENV ?? ''}`,
    awsAccessKeyId: process.env.CLOUDWATCH_ACCESS_KEY,
    awsSecretKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
    awsRegion: process.env.CLOUDWATCH_REGION,
    messageFormatter: ({ level, message, additionalInfo }) =>
      `[${level}] : ${message} \nAdditional Info: ${JSON.stringify(additionalInfo)}}`,
  };
  logger.add(new WinstonCloudWatch(cloudwatchConfig));
}

export class EventLogMiddleware implements MiddlewareInterface<GraphqlContext> {
  async use(resolverData: ResolverData<GraphqlContext>, next: NextFn): Promise<any> {
    if (resolverData.root === undefined) {
      const data: Prisma.EventLogCreateInput = {
        operationName: resolverData.info.fieldName,
        operationType: resolverData.info.parentType.name,
        args: resolverData.args,
      };
      await createEventLog(data, resolverData.context);
    }
    return await next();
  }
}
