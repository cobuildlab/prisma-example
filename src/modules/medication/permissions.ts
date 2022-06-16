import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createMedicationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createMedicationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateMedicationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateMedicationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const medicationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('medicationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const medicationsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('medicationsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const medicationActionsConfig: ResolverActionsConfig<'Medication'> = {
  createMedication: [Authorized<PermissionFunction>(createMedicationPermission)],
  medications: [Authorized<PermissionFunction>(medicationsPermission)],
  medication: [Authorized<PermissionFunction>(medicationPermission)],
  deleteMedication: [Authorized<PermissionFunction>(medicationPermission)],
  updateMedication: [Authorized<PermissionFunction>(updateMedicationPermission)],
};
