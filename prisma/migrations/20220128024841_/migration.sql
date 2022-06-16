/*
  Warnings:

  - A unique constraint covering the columns `[name,level,clientId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "clientId" BIGINT;

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_level_clientId_key" ON "Role"("name", "level", "clientId");

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
