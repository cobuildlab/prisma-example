import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createPatientFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const patientFilesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const patientFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const findFirstPatientFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const aggregatePatientFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const patientFileActionsConfig: ResolverActionsConfig<'PatientFile'> = {
  createPatientFile: [Authorized<PermissionFunction>(createPatientFilePermission)],
  patientFiles: [Authorized<PermissionFunction>(patientFilesPermission)],
  patientFile: [Authorized<PermissionFunction>(patientFilePermission)],
  findFirstPatientFile: [Authorized<PermissionFunction>(findFirstPatientFilePermission)],
  aggregatePatientFile: [Authorized<PermissionFunction>(aggregatePatientFilePermission)],
};
