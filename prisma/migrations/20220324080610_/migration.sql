/*
  Warnings:

  - You are about to drop the column `vaccionationStatusId` on the `Vaccination` table. All the data in the column will be lost.
  - Added the required column `vaccinationStatusId` to the `Vaccination` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vaccination" DROP CONSTRAINT "Vaccination_vaccionationStatusId_fkey";

-- AlterTable
ALTER TABLE "Vaccination" DROP COLUMN "vaccionationStatusId",
ADD COLUMN     "vaccinationStatusId" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "Vaccination" ADD CONSTRAINT "Vaccination_vaccinationStatusId_fkey" FOREIGN KEY ("vaccinationStatusId") REFERENCES "VaccinationStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
