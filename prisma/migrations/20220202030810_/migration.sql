/*
  Warnings:

  - You are about to drop the `UserRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserRole" DROP CONSTRAINT "UserRole_userId_fkey";

-- DropTable
DROP TABLE "UserRole";

-- CreateTable
CREATE TABLE "UserSystemRole" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "roleId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,

    CONSTRAINT "UserSystemRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSystemRole_uuid_key" ON "UserSystemRole"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "UserSystemRole_roleId_userId_key" ON "UserSystemRole"("roleId", "userId");

-- AddForeignKey
ALTER TABLE "UserSystemRole" ADD CONSTRAINT "UserSystemRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSystemRole" ADD CONSTRAINT "UserSystemRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
