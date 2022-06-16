/*
  Warnings:

  - You are about to drop the column `patientId` on the `AllergyReactionType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `AllergyReactionType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `VaccinationStatus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `alergySeverity` to the `Allergy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alergySource` to the `Allergy` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AlergySource" AS ENUM ('TESTED', 'VERBAL');

-- DropForeignKey
ALTER TABLE "AllergyReactionType" DROP CONSTRAINT "AllergyReactionType_patientId_fkey";

-- AlterTable
ALTER TABLE "Allergy" ADD COLUMN     "alergySeverity" "AlergySeverity" NOT NULL,
ADD COLUMN     "alergySource" "AlergySource" NOT NULL,
ADD COLUMN     "testedAt" TIMESTAMPTZ(3);

-- AlterTable
ALTER TABLE "AllergyReactionType" DROP COLUMN "patientId";

-- CreateIndex
CREATE UNIQUE INDEX "AllergyReactionType_name_key" ON "AllergyReactionType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VaccinationStatus_name_key" ON "VaccinationStatus"("name");
