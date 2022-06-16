import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const basePermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('basePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const rolePermissionActionsConfig: ResolverActionsConfig<'RolePermission'> = {
  rolePermissions: [Authorized<PermissionFunction>(basePermission)],
  rolePermission: [Authorized<PermissionFunction>(basePermission)],
  aggregateRolePermission: [Authorized<PermissionFunction>(basePermission)],
};
