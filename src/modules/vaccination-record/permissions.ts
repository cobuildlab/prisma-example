import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createVaccinationRecordPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createVaccinationRecordPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateVaccinationRecordPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateVaccinationRecordPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const vaccinationRecordPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('vaccinationRecordPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const vaccinationRecordsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('vaccinationRecordsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const vaccinationRecordActionsConfig: ResolverActionsConfig<'VaccinationRecord'> = {
  createVaccinationRecord: [Authorized<PermissionFunction>(createVaccinationRecordPermission)],
  vaccinationRecord: [Authorized<PermissionFunction>(vaccinationRecordsPermission)],
  vaccinationRecords: [Authorized<PermissionFunction>(vaccinationRecordPermission)],
  deleteVaccinationRecord: [Authorized<PermissionFunction>(vaccinationRecordPermission)],
  updateVaccinationRecord: [Authorized<PermissionFunction>(updateVaccinationRecordPermission)],
};
