import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createAllergyPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createAllergyPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateAllergyPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateAllergyPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const allergyPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('allergyPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const allergiesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('allergiesPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const allergyActionsConfig: ResolverActionsConfig<'Allergy'> = {
  createAllergy: [Authorized<PermissionFunction>(createAllergyPermission)],
  allergies: [Authorized<PermissionFunction>(allergiesPermission)],
  allergy: [Authorized<PermissionFunction>(allergyPermission)],
  deleteAllergy: [Authorized<PermissionFunction>(allergyPermission)],
  updateAllergy: [Authorized<PermissionFunction>(updateAllergyPermission)],
  aggregateAllergy: [Authorized<PermissionFunction>(updateAllergyPermission)],
};
