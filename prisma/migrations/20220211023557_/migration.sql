/*
  Warnings:

  - You are about to drop the column `emailAddressId` on the `PatientEmailAddress` table. All the data in the column will be lost.
  - You are about to drop the `EmailAddress` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email,patientId]` on the table `PatientEmailAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `PatientEmailAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PatientEmailAddress" DROP CONSTRAINT "PatientEmailAddress_emailAddressId_fkey";

-- DropIndex
DROP INDEX "PatientEmailAddress_emailAddressId_patientId_key";

-- AlterTable
ALTER TABLE "PatientEmailAddress" DROP COLUMN "emailAddressId",
ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "EmailAddress";

-- CreateTable
CREATE TABLE "PatientContact" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "homePhone" TEXT,
    "cellPhone" TEXT,
    "relationship" TEXT,

    CONSTRAINT "PatientContact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PatientContact_uuid_key" ON "PatientContact"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientEmailAddress_email_patientId_key" ON "PatientEmailAddress"("email", "patientId");

-- AddForeignKey
ALTER TABLE "PatientContact" ADD CONSTRAINT "PatientContact_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
