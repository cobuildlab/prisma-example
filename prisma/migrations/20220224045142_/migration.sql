/*
  Warnings:

  - You are about to drop the `LanguagePatient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LanguageStaff` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LanguagePatient" DROP CONSTRAINT "LanguagePatient_languageId_fkey";

-- DropForeignKey
ALTER TABLE "LanguagePatient" DROP CONSTRAINT "LanguagePatient_patientId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageStaff" DROP CONSTRAINT "LanguageStaff_languageId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageStaff" DROP CONSTRAINT "LanguageStaff_staffId_fkey";

-- DropTable
DROP TABLE "LanguagePatient";

-- DropTable
DROP TABLE "LanguageStaff";

-- CreateTable
CREATE TABLE "PatientLanguage" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "languageId" BIGINT NOT NULL,

    CONSTRAINT "PatientLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffLanguage" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "staffId" BIGINT NOT NULL,
    "languageId" BIGINT NOT NULL,

    CONSTRAINT "StaffLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PatientLanguage_uuid_key" ON "PatientLanguage"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientLanguage_patientId_languageId_key" ON "PatientLanguage"("patientId", "languageId");

-- CreateIndex
CREATE UNIQUE INDEX "StaffLanguage_uuid_key" ON "StaffLanguage"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "StaffLanguage_staffId_languageId_key" ON "StaffLanguage"("staffId", "languageId");

-- AddForeignKey
ALTER TABLE "PatientLanguage" ADD CONSTRAINT "PatientLanguage_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientLanguage" ADD CONSTRAINT "PatientLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffLanguage" ADD CONSTRAINT "StaffLanguage_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffLanguage" ADD CONSTRAINT "StaffLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
