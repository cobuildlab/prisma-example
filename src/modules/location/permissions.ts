import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createLocationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createLocationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const updateLocationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createLocationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const deleteLocationPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('deleteLocationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const locationPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('locationPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const locationsPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('locationsPermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const locationActionsConfig: ResolverActionsConfig<'Location'> = {
  createLocation: [Authorized<PermissionFunction>(createLocationPermission)],
  updateLocation: [Authorized<PermissionFunction>(updateLocationPermission)],
  locations: [Authorized<PermissionFunction>(locationsPermission)],
  location: [Authorized<PermissionFunction>(locationPermission)],
  deleteLocation: [Authorized<PermissionFunction>(deleteLocationPermission)],
};
