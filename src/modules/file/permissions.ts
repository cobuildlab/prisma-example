import { Authorized, ResolverData } from 'type-graphql';
import { ResolverActionsConfig } from '../../../prisma/generated/type-graphql';
import { PermissionFunction } from '../../shared/base-permissions';
import { GraphqlContext } from '../../index';

const filesPermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('createFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const findFirstFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const aggregateFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFilePermission:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const createFilePermission = async (
  resolverData: ResolverData<GraphqlContext>,
): Promise<boolean> => {
  console.log('createFileContact:', resolverData);
  // TODO: hasPermission helper
  return true;
};

const filePermission = async (resolverData: ResolverData<GraphqlContext>): Promise<boolean> => {
  console.log('createFileContact:', resolverData);
  // TODO: hasPermission helper
  return true;
};

export const fileActionsConfig: ResolverActionsConfig<'File'> = {
  createFile: [Authorized<PermissionFunction>(createFilePermission)],
  files: [Authorized<PermissionFunction>(filesPermission)],
  file: [Authorized<PermissionFunction>(filePermission)],
  findFirstFile: [Authorized<PermissionFunction>(findFirstFilePermission)],
  aggregateFile: [Authorized<PermissionFunction>(aggregateFilePermission)],
};
