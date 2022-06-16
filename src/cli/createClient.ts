import { Prisma, AuthLevel, Client } from '@prisma/client';
import { PRISMA } from '../shared/db';

export const createClient = async (
  clientName: string,
  organizations?: Prisma.OrganizationCreateNestedManyWithoutClientInput,
): Promise<Client> => {
  const defaultLocationData: Prisma.LocationCreateWithoutOrganizationInput = {
    name: 'My First Location',
  };

  const defaultOrganizationData: Prisma.OrganizationCreateWithoutClientInput = {
    name: 'My First Organization',
    locations: { create: defaultLocationData },
  };

  if (organizations === undefined) {
    organizations = { create: defaultOrganizationData };
  }

  const clientData: Prisma.ClientCreateInput = {
    name: clientName,
    roles: {
      create: {
        name: 'IS_MEMBER',
        description: 'IS_MEMBER',
        level: AuthLevel.SYSTEM,
      },
    },
    organizations: organizations,
  };

  const client = await PRISMA.client.create({
    data: clientData,
  });
  return client;
};
