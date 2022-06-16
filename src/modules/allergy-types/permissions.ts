import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createAllergyReactionTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createAllergyReactionTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateAllergyReactionTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateAllergyReactionTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const allergyReactionTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('allergyReactionTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const allergyReactionTypesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('allergyReactionTypesPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const allergyReactionTypeActionsConfig: ResolverActionsConfig<'AllergyReactionType'> = {
  createAllergyReactionType: [Authorized<PermissionFunction>(createAllergyReactionTypePermission)],
  allergyReactionTypes: [Authorized<PermissionFunction>(allergyReactionTypesPermission)],
  allergyReactionType: [Authorized<PermissionFunction>(allergyReactionTypePermission)],
  deleteAllergyReactionType: [Authorized<PermissionFunction>(allergyReactionTypePermission)],
  updateAllergyReactionType: [Authorized<PermissionFunction>(updateAllergyReactionTypePermission)],
};
