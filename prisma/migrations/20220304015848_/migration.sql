/*
  Warnings:

  - You are about to drop the column `alergySeverity` on the `Allergy` table. All the data in the column will be lost.
  - You are about to drop the column `alergySource` on the `Allergy` table. All the data in the column will be lost.
  - Added the required column `allergySeverity` to the `Allergy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allergySource` to the `Allergy` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AllergySeverity" AS ENUM ('MILD', 'MODERATE', 'SEVERE', 'MINIMAL');

-- CreateEnum
CREATE TYPE "AllergySource" AS ENUM ('TESTED', 'VERBAL');

-- AlterTable
ALTER TABLE "Allergy" DROP COLUMN "alergySeverity",
DROP COLUMN "alergySource",
ADD COLUMN     "allergySeverity" "AllergySeverity" NOT NULL,
ADD COLUMN     "allergySource" "AllergySource" NOT NULL;

-- DropEnum
DROP TYPE "AlergySeverity";

-- DropEnum
DROP TYPE "AlergySource";
