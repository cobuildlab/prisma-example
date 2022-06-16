import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const eventsLogPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('eventsLogPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const eventsLogActionsConfig: ResolverActionsConfig<'EventLog'> = {
  eventLogs: [Authorized<PermissionFunction>(eventsLogPermission)],
};
