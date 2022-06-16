import { PrismaClient, Prisma, AuthLevel, Role } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async (): Promise<Role> => {
  const data: Prisma.RoleCreateInput = {
    name: 'SYSTEM_ADMIN',
    description: 'System Admin',
    level: AuthLevel.SYSTEM,
  };

  const role = await prisma.role.create({
    data,
  });
  return role;
};
seed().then(console.log).catch(console.error);
