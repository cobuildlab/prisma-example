import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createProviderPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createProviderPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateProviderPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateProviderPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const providerPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('providerPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const providersPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('providersPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const providerActionsConfig: ResolverActionsConfig<'Provider'> = {
  createProvider: [Authorized<PermissionFunction>(createProviderPermission)],
  providers: [Authorized<PermissionFunction>(providersPermission)],
  provider: [Authorized<PermissionFunction>(providerPermission)],
  deleteProvider: [Authorized<PermissionFunction>(providerPermission)],
  updateProvider: [Authorized<PermissionFunction>(updateProviderPermission)],
};
