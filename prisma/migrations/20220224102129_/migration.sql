/*
  Warnings:

  - You are about to drop the column `clientId` on the `Patient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_clientId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "clientId";
