import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createAppointmentPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createAppointmentPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateAppointmentPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('updateAppointmentPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const appointmentPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('appointmentPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const appointmentsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('appointmentsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const appointmentActionsConfig: ResolverActionsConfig<'Appointment'> = {
  createAppointment: [Authorized<PermissionFunction>(createAppointmentPermission)],
  appointments: [Authorized<PermissionFunction>(appointmentsPermission)],
  appointment: [Authorized<PermissionFunction>(appointmentPermission)],
  deleteAppointment: [Authorized<PermissionFunction>(appointmentPermission)],
  updateAppointment: [Authorized<PermissionFunction>(updateAppointmentPermission)],
};
