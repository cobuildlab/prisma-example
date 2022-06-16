import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createOrganizationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createOrganizationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateOrganizationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateOrganizationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const organizationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('organizationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const organizationsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('organizationsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const organizationActionsConfig: ResolverActionsConfig<'Organization'> = {
  createOrganization: [Authorized<PermissionFunction>(createOrganizationPermission)],
  organizations: [Authorized<PermissionFunction>(organizationsPermission)],
  organization: [Authorized<PermissionFunction>(organizationPermission)],
  deleteOrganization: [Authorized<PermissionFunction>(organizationPermission)],
  updateOrganization: [Authorized<PermissionFunction>(updateOrganizationPermission)],
};
