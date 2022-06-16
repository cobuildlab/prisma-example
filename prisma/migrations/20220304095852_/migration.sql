/*
  Warnings:

  - Added the required column `allergyCategory` to the `Allergy` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AllergyCategory" AS ENUM ('GENERAL', 'MEDICAL', 'FAMILIAL');

-- AlterTable
ALTER TABLE "Allergy" ADD COLUMN     "allergyCategory" "AllergyCategory" NOT NULL,
ADD COLUMN     "description" TEXT;
