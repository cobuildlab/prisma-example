import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createVaccinationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createVaccinationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateVaccinationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateVaccinationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const vaccinationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('vaccinationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const vaccinationsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('vaccinationsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const vaccinationActionsConfig: ResolverActionsConfig<'Vaccination'> = {
  createVaccination: [Authorized<PermissionFunction>(createVaccinationPermission)],
  vaccinations: [Authorized<PermissionFunction>(vaccinationsPermission)],
  vaccination: [Authorized<PermissionFunction>(vaccinationPermission)],
  deleteVaccination: [Authorized<PermissionFunction>(vaccinationPermission)],
  updateVaccination: [Authorized<PermissionFunction>(updateVaccinationPermission)],
  aggregateVaccination: [Authorized<PermissionFunction>(updateVaccinationPermission)],
};
