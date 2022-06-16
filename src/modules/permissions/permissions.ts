import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const permissionPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('permissionPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const permissionsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('permissionsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const permissionActionsConfig: ResolverActionsConfig<'Permission'> = {
  permissions: [Authorized<PermissionFunction>(permissionsPermission)],
  permission: [Authorized<PermissionFunction>(permissionPermission)],
  aggregatePermission: [Authorized<PermissionFunction>(permissionPermission)],
};
