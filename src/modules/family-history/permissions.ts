import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createFamilyHistoryPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFamilyHistoryPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const familyHistoryPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFamilyHistoryPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const familyHistoriesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('familyHistoriesPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const findFirstFamilyHistoryPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFamilyHistoryPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const aggregateFamilyHistoryPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFamilyHistoryPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const familyHistoryActionsConfig: ResolverActionsConfig<'FamilyHistory'> = {
  createFamilyHistory: [Authorized<PermissionFunction>(createFamilyHistoryPermission)],
  familyHistory: [Authorized<PermissionFunction>(familyHistoryPermission)],
  familyHistories: [Authorized<PermissionFunction>(familyHistoriesPermission)],
  findFirstFamilyHistory: [Authorized<PermissionFunction>(findFirstFamilyHistoryPermission)],
  aggregateFamilyHistory: [Authorized<PermissionFunction>(aggregateFamilyHistoryPermission)],
};

export const familyHistoryMemberTypeActionsConfig: ResolverActionsConfig<'FamilyHistoryMemberType'> =
  {
    createFamilyHistoryMemberType: [Authorized<PermissionFunction>(createFamilyHistoryPermission)],
    familyHistoryMemberType: [Authorized<PermissionFunction>(familyHistoryPermission)],
    familyHistoryMemberTypes: [Authorized<PermissionFunction>(familyHistoriesPermission)],
    findFirstFamilyHistoryMemberType: [
      Authorized<PermissionFunction>(findFirstFamilyHistoryPermission),
    ],
    aggregateFamilyHistoryMemberType: [
      Authorized<PermissionFunction>(aggregateFamilyHistoryPermission),
    ],
  };

export const familyHistoryHereditaryRiskActionsConfig: ResolverActionsConfig<'FamilyHistoryHereditaryRisk'> =
  {
    createFamilyHistoryHereditaryRisk: [
      Authorized<PermissionFunction>(createFamilyHistoryPermission),
    ],
    familyHistoryHereditaryRisk: [Authorized<PermissionFunction>(familyHistoryPermission)],
    familyHistoryHereditaryRisks: [Authorized<PermissionFunction>(familyHistoriesPermission)],
    findFirstFamilyHistoryHereditaryRisk: [
      Authorized<PermissionFunction>(findFirstFamilyHistoryPermission),
    ],
    aggregateFamilyHistoryHereditaryRisk: [
      Authorized<PermissionFunction>(aggregateFamilyHistoryPermission),
    ],
  };
