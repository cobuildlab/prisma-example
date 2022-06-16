import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const createFileTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFileTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const fileTypePermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('createFileTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const fileTypesPermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFileTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const findFirstFileTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFileTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const aggregateFileTypePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFileTypePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const fileTypeFileActionsConfig: ResolverActionsConfig<'FileType'> = {
  createFileType: [Authorized<PermissionFunction>(createFileTypePermission)],
  fileType: [Authorized<PermissionFunction>(fileTypePermission)],
  fileTypes: [Authorized<PermissionFunction>(fileTypesPermission)],
  findFirstFileType: [Authorized<PermissionFunction>(findFirstFileTypePermission)],
  aggregateFileType: [Authorized<PermissionFunction>(aggregateFileTypePermission)],
};
