/*
  Warnings:

  - You are about to drop the column `lastVaccination` on the `Vaccination` table. All the data in the column will be lost.
  - You are about to drop the column `nextVaccination` on the `Vaccination` table. All the data in the column will be lost.
  - You are about to drop the column `vaccione` on the `Vaccination` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vaccination" DROP COLUMN "lastVaccination",
DROP COLUMN "nextVaccination",
DROP COLUMN "vaccione",
ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "VaccinationRecord" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "vaccine" TEXT NOT NULL,
    "nextVaccination" TIMESTAMP(3),
    "lastVaccination" TIMESTAMP(3),
    "vaccinationId" BIGINT NOT NULL,

    CONSTRAINT "VaccinationRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VaccinationRecord_uuid_key" ON "VaccinationRecord"("uuid");

-- AddForeignKey
ALTER TABLE "VaccinationRecord" ADD CONSTRAINT "VaccinationRecord_vaccinationId_fkey" FOREIGN KEY ("vaccinationId") REFERENCES "Vaccination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
