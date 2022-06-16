/*
  Warnings:

  - Added the required column `clientId` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "clientId" BIGINT NOT NULL;

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "clientId" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
