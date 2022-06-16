import { PRISMA } from '../../shared/db';
import { EventLog } from '../../../prisma/generated/type-graphql';
import { GraphqlContext } from '../../index';
import { Prisma } from '@prisma/client';

export const createEventLog = async (
  eventLog: Prisma.EventLogCreateInput,
  graphqlContext: GraphqlContext,
): Promise<EventLog> => {
  const data: Prisma.EventLogCreateInput = {
    operationType: eventLog.operationType,
    operationName: eventLog.operationName,
    args: eventLog.args,
  };

  if ((graphqlContext.user ?? false) !== false) {
    data.user = {
      connect: {
        id: graphqlContext.user?.id,
      },
    };
  }

  return await PRISMA.eventLog.create({
    data,
  });
};
