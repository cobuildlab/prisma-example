import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createAddressPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createAddressPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const addressPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('addressPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const addressesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('addresssPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const addressActionsConfig: ResolverActionsConfig<'Address'> = {
  createAddress: [Authorized<PermissionFunction>(createAddressPermission)],
  addresses: [Authorized<PermissionFunction>(addressesPermission)],
  address: [Authorized<PermissionFunction>(addressPermission)],
};
