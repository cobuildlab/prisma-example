import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const basePermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('basePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const userClientRoleActionsConfig: ResolverActionsConfig<'UserClientRole'> = {
  createUserClientRole: [Authorized<PermissionFunction>(basePermission)],
  deleteUserClientRole: [Authorized<PermissionFunction>(basePermission)],
  deleteManyUserClientRole: [Authorized<PermissionFunction>(basePermission)],
  userClientRoles: [Authorized<PermissionFunction>(basePermission)],
  userClientRole: [Authorized<PermissionFunction>(basePermission)],
  aggregateUserClientRole: [Authorized<PermissionFunction>(basePermission)],
};

export const userLocationRoleActionsConfig: ResolverActionsConfig<'UserLocationRole'> = {
  createUserLocationRole: [Authorized<PermissionFunction>(basePermission)],
  createManyUserLocationRole: [Authorized<PermissionFunction>(basePermission)],
  userLocationRoles: [Authorized<PermissionFunction>(basePermission)],
  userLocationRole: [Authorized<PermissionFunction>(basePermission)],
  aggregateUserLocationRole: [Authorized<PermissionFunction>(basePermission)],
  deleteUserLocationRole: [Authorized<PermissionFunction>(basePermission)],
  deleteManyUserLocationRole: [Authorized<PermissionFunction>(basePermission)],
};

export const userOrganizationRoleActionsConfig: ResolverActionsConfig<'UserOrganizationRole'> = {
  createUserOrganizationRole: [Authorized<PermissionFunction>(basePermission)],
  createManyUserOrganizationRole: [Authorized<PermissionFunction>(basePermission)],
  userOrganizationRoles: [Authorized<PermissionFunction>(basePermission)],
  userOrganizationRole: [Authorized<PermissionFunction>(basePermission)],
  aggregateUserOrganizationRole: [Authorized<PermissionFunction>(basePermission)],
  deleteUserOrganizationRole: [Authorized<PermissionFunction>(basePermission)],
  deleteManyUserOrganizationRole: [Authorized<PermissionFunction>(basePermission)],
};

export const userActionsConfig: ResolverActionsConfig<'User'> = {
  aggregateUser: [Authorized<PermissionFunction>(basePermission)],
};
