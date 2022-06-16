import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createVaccinationStatusPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createVaccinationStatusPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateVaccinationStatusPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateVaccinationStatusPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const vaccinationStatusPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('vaccinationStatusPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const vaccinationStatusesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('vaccinationStatusesPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const vaccinationStatusActionsConfig: ResolverActionsConfig<'VaccinationStatus'> = {
  createVaccinationStatus: [Authorized<PermissionFunction>(createVaccinationStatusPermission)],
  vaccinationStatuses: [Authorized<PermissionFunction>(vaccinationStatusesPermission)],
  vaccinationStatus: [Authorized<PermissionFunction>(vaccinationStatusPermission)],
  deleteVaccinationStatus: [Authorized<PermissionFunction>(vaccinationStatusPermission)],
  updateVaccinationStatus: [Authorized<PermissionFunction>(updateVaccinationStatusPermission)],
};
