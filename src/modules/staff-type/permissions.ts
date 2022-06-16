import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createStaffTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createStaffTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateStaffTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateStaffTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const staffTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('staffTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const staffTypesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('staffTypesPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const staffTypeActionsConfig: ResolverActionsConfig<'StaffType'> = {
  createStaffType: [Authorized<PermissionFunction>(createStaffTypePermission)],
  staffTypes: [Authorized<PermissionFunction>(staffTypesPermission)],
  staffType: [Authorized<PermissionFunction>(staffTypePermission)],
  deleteStaffType: [Authorized<PermissionFunction>(staffTypePermission)],
  updateStaffType: [Authorized<PermissionFunction>(updateStaffTypePermission)],
  aggregateStaffType: [Authorized<PermissionFunction>(updateStaffTypePermission)],
};
