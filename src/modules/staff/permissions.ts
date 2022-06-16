import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createStaffPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createStaffPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateStaffPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateStaffPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const deleteStaffPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('deleteStaffPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const staffPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('staffPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const staffsPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('staffsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const staffActionsConfig: ResolverActionsConfig<'Staff'> = {
  createStaff: [Authorized<PermissionFunction>(createStaffPermission)],
  findUniqueStaff: [Authorized<PermissionFunction>(staffPermission)],
  findManyStaff: [Authorized<PermissionFunction>(staffsPermission)],
  deleteStaff: [Authorized<PermissionFunction>(deleteStaffPermission)],
  updateStaff: [Authorized<PermissionFunction>(updateStaffPermission)],
  aggregateStaff: [Authorized<PermissionFunction>(updateStaffPermission)],
};
