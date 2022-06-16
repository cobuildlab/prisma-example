import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createClientPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createClientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const clientPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('clientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const clientsPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('clientsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const clientActionsConfig: ResolverActionsConfig<'Client'> = {
  createClient: [Authorized<PermissionFunction>(createClientPermission)],

  clients: [Authorized<PermissionFunction>(clientsPermission)],
  client: [Authorized<PermissionFunction>(clientPermission)],
  aggregateClient: [Authorized<PermissionFunction>(clientPermission)],
};
