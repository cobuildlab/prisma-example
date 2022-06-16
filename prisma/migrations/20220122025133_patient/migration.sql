/*
  Warnings:

  - You are about to drop the column `locationId` on the `Patient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_locationId_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "locationId",
ADD COLUMN     "cellPhone" TEXT,
ADD COLUMN     "dateOfBirth" DATE,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "homePhone" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "workPhone" TEXT;

-- CreateTable
CREATE TABLE "PatientLocation" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "locationId" BIGINT NOT NULL,
    "patientId" BIGINT NOT NULL,

    CONSTRAINT "PatientLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PatientLocation_uuid_key" ON "PatientLocation"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientLocation_patientId_locationId_key" ON "PatientLocation"("patientId", "locationId");

-- AddForeignKey
ALTER TABLE "PatientLocation" ADD CONSTRAINT "PatientLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientLocation" ADD CONSTRAINT "PatientLocation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
