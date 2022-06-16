/*
  Warnings:

  - Added the required column `type` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AppointmentType" AS ENUM ('INIITAL', 'FOLLOW_UP');

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "type" "AppointmentType" NOT NULL;
