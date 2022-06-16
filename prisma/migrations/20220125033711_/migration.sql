/*
  Warnings:

  - You are about to drop the column `cellPhone` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `homePhone` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `workPhone` on the `Patient` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "PhoneType" AS ENUM ('HOME', 'WORK', 'MOBILE', 'OTHER');

-- CreateEnum
CREATE TYPE "AddressType" AS ENUM ('HOME', 'WORK', 'OTHER');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('DRAFT', 'SCHEDULED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CREATE', 'UPDATE', 'DELETE', 'READ');

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "cellPhone",
DROP COLUMN "homePhone",
DROP COLUMN "workPhone",
ADD COLUMN     "middleName" TEXT;

-- CreateTable
CREATE TABLE "PatientPhone" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "phoneId" BIGINT NOT NULL,

    CONSTRAINT "PatientPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phone" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "number" TEXT NOT NULL,
    "countryCode" TEXT,
    "extension" TEXT,
    "type" "PhoneType" NOT NULL,

    CONSTRAINT "Phone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientAddress" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "addressId" BIGINT NOT NULL,

    CONSTRAINT "PatientAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT,
    "zipCode" TEXT NOT NULL,
    "type" "AddressType" NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "date" TIMESTAMPTZ(3),
    "status" "AppointmentStatus" NOT NULL,
    "patientId" BIGINT NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventLog" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "objectType" TEXT,
    "objectUuid" TEXT,
    "eventType" "EventType" NOT NULL,
    "meta" JSONB NOT NULL,
    "userId" BIGINT NOT NULL,

    CONSTRAINT "EventLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PatientPhone_uuid_key" ON "PatientPhone"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientPhone_patientId_phoneId_key" ON "PatientPhone"("patientId", "phoneId");

-- CreateIndex
CREATE UNIQUE INDEX "Phone_uuid_key" ON "Phone"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientAddress_uuid_key" ON "PatientAddress"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientAddress_addressId_patientId_key" ON "PatientAddress"("addressId", "patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_uuid_key" ON "Address"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_uuid_key" ON "Appointment"("uuid");

-- CreateIndex
CREATE INDEX "EventLog_objectType_idx" ON "EventLog"("objectType");

-- CreateIndex
CREATE INDEX "EventLog_eventType_idx" ON "EventLog"("eventType");

-- CreateIndex
CREATE INDEX "EventLog_objectUuid_idx" ON "EventLog"("objectUuid");

-- AddForeignKey
ALTER TABLE "PatientPhone" ADD CONSTRAINT "PatientPhone_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientPhone" ADD CONSTRAINT "PatientPhone_phoneId_fkey" FOREIGN KEY ("phoneId") REFERENCES "Phone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientAddress" ADD CONSTRAINT "PatientAddress_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientAddress" ADD CONSTRAINT "PatientAddress_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventLog" ADD CONSTRAINT "EventLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
