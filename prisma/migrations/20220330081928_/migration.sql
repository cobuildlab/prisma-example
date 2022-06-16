/*
  Warnings:

  - Added the required column `type` to the `Medication` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MedicationType" AS ENUM ('PRESCRIPTION', 'OTHER_MEDICATION');

-- AlterTable
ALTER TABLE "Medication" ADD COLUMN     "notes" TEXT,
ADD COLUMN     "type" "MedicationType" NOT NULL;

-- CreateTable
CREATE TABLE "MedicationRecord" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "productName" TEXT NOT NULL,
    "date" TIMESTAMPTZ(3) NOT NULL,
    "expiryDate" TIMESTAMPTZ(3) NOT NULL,
    "dosage" TEXT NOT NULL,
    "medicationId" BIGINT NOT NULL,

    CONSTRAINT "MedicationRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicationRecord_uuid_key" ON "MedicationRecord"("uuid");

-- AddForeignKey
ALTER TABLE "MedicationRecord" ADD CONSTRAINT "MedicationRecord_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
