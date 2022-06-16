import { Command } from 'commander';
import { AuthLevel } from '@prisma/client';
import { PRISMA } from './shared/db';
import fetch from 'node-fetch';
import * as fs from 'fs';

import { createClient } from './cli/createClient';
import { createTestData } from './cli/createTestData';
import { deleteData } from './cli/deleteData';

const program = new Command();
program.option('-d, --delete', 'Delete all data');
program.option('-c, --client <name>', 'Create a new Client');
program.option('-t, --testdata', 'Create test data');
program.option('-sr, --seed-roles-to-client <name>', 'Seed Roles to a client');
program.option(
  '-s, --seed-permissions',
  'Populate Permission Tables with all available permissions',
);

interface Type {
  name: string;
}

interface Permission {
  name: string;
  level: AuthLevel;
}

async function fetchQueries(): Promise<string[]> {
  const query = `
      query availableQueries {
          __schema {
            queryType {
              fields {
                name
              }
            }
          }
        }`;
  const response = await fetch('http://localhost:3000/', {
    method: 'post',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const {
    data: {
      __schema: {
        queryType: { fields },
      },
    },
  } = await response.json();
  return fields.map(({ name }: Type) => name);
}

async function fetchMutations(): Promise<string[]> {
  const query = `
      query availableMutations {
          __schema {
            mutationType {
              fields {
                name
              }
            }
          }
        }`;
  const response = await fetch('http://localhost:3000/', {
    method: 'post',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const {
    data: {
      __schema: {
        mutationType: { fields },
      },
    },
  } = await response.json();
  return fields.map(({ name }: Type) => name);
}

const run = async (): Promise<void> => {
  program.parse(process.argv);
  const options = program.opts();

  console.log('Running CLI with:', options);
  if (options.delete !== undefined) {
    await deleteData();
    return;
  }
  if (options.client !== undefined) {
    await createClient(options.client as string);
    return;
  }
  if (options.testdata !== undefined) {
    await createTestData();
    return;
  }
  if (options.seedPermissions !== undefined) {
    const queries = await fetchQueries();
    const mutations = await fetchMutations();
    const allPermissions = [...queries, ...mutations];
    const permissions: Permission[] = [];
    for (const level in AuthLevel) {
      for (const permission of allPermissions) {
        try {
          await PRISMA.permission.create({
            data: {
              name: permission,
              level: level as AuthLevel,
            },
          });
        } catch (e) {
          console.log(e);
        }
        permissions.push({
          name: permission,
          level: level as AuthLevel,
        });
      }
    }
    fs.writeFileSync('./prisma/permissions.json', JSON.stringify(permissions));
    return;
  }
  if (options.seedRolesToClient !== undefined) {
    let client = await PRISMA.client.findFirst({
      where: {
        name: options.seedRolesToClient as string,
      },
    });
    if (client === null) {
      client = await createClient(options.seedRolesToClient as string);
    }

    const rolesData: Array<Record<string, string | AuthLevel | any>> = [
      { name: 'Administrator', level: AuthLevel.SYSTEM, clientId: client.id },
      { name: 'Client Admin', level: AuthLevel.CLIENT, clientId: client.id },
      { name: 'Location Admin', level: AuthLevel.LOCATION, clientId: client.id },
      { name: 'Organization Admin', level: AuthLevel.ORGANIZATION, clientId: client.id },
    ];

    for (const roleData of rolesData) {
      const roleRecord = {
        name: roleData.name,
        level: roleData.level,
        clientId: roleData.clientId,
      };
      const role = await PRISMA.role.findFirst({
        where: roleRecord,
      });
      if (role === null) {
        await PRISMA.role.create({
          data: { ...roleRecord },
        });
      }
    }
  }

  console.log('Please select a valid option.');
};
run().then(console.log).catch(console.error);
