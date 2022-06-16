import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createPatientPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const patientsPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('createPatientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const patientPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('createPatientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const findFirstPatientPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const aggregatePatientPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const createPatientContact = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientContact:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const patientContactsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientContact:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const createPatientAddressPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientContact:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const patientAddressesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createPatientContact:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const patientActionsConfig: ResolverActionsConfig<'Patient'> = {
  createPatient: [Authorized<PermissionFunction>(createPatientPermission)],
  patients: [Authorized<PermissionFunction>(patientsPermission)],
  patient: [Authorized<PermissionFunction>(patientPermission)],
  findFirstPatient: [Authorized<PermissionFunction>(findFirstPatientPermission)],
  aggregatePatient: [Authorized<PermissionFunction>(aggregatePatientPermission)],
};

export const patientContactsActionsConfig: ResolverActionsConfig<'PatientContact'> = {
  createPatientContact: [Authorized<PermissionFunction>(createPatientContact)],
  patientContacts: [Authorized<PermissionFunction>(patientContactsPermission)],
};

export const patientAddressesActionsConfig: ResolverActionsConfig<'PatientAddress'> = {
  createPatientAddress: [Authorized<PermissionFunction>(createPatientAddressPermission)],
  patientAddresses: [Authorized<PermissionFunction>(patientAddressesPermission)],
};
