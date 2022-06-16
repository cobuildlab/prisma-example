import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createRolePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createRolePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateRolePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateRolePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const deleteRolePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateRolePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const rolePermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('rolePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const rolesPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('rolesPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const roleActionsConfig: ResolverActionsConfig<'Role'> = {
  createRole: [Authorized<PermissionFunction>(createRolePermission)],
  roles: [Authorized<PermissionFunction>(rolesPermission)],
  role: [Authorized<PermissionFunction>(rolePermission)],
  deleteRole: [Authorized<PermissionFunction>(deleteRolePermission)],
  updateRole: [Authorized<PermissionFunction>(updateRolePermission)],
  aggregateRole: [Authorized<PermissionFunction>(updateRolePermission)],
  deleteManyRole: [Authorized<PermissionFunction>(updateRolePermission)],
};
