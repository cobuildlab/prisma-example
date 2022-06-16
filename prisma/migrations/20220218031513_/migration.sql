/*
  Warnings:

  - You are about to drop the column `gender` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Staff` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "gender",
ADD COLUMN     "etnicityId" BIGINT,
ADD COLUMN     "genderId" BIGINT,
ADD COLUMN     "maritalStatusId" BIGINT,
ADD COLUMN     "pronounId" BIGINT,
ADD COLUMN     "raceId" BIGINT;

-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "gender",
ADD COLUMN     "etnicityId" BIGINT,
ADD COLUMN     "genderId" BIGINT,
ADD COLUMN     "maritalStatusId" BIGINT,
ADD COLUMN     "pronounId" BIGINT,
ADD COLUMN     "raceId" BIGINT;

-- CreateTable
CREATE TABLE "Pronoun" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Pronoun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaritalStatus" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "MaritalStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Etnicity" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Etnicity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguagePatient" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "languageId" BIGINT NOT NULL,

    CONSTRAINT "LanguagePatient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageStaff" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "staffId" BIGINT NOT NULL,
    "languageId" BIGINT NOT NULL,

    CONSTRAINT "LanguageStaff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pronoun_uuid_key" ON "Pronoun"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "MaritalStatus_uuid_key" ON "MaritalStatus"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_uuid_key" ON "Gender"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Race_uuid_key" ON "Race"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Etnicity_uuid_key" ON "Etnicity"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Language_uuid_key" ON "Language"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LanguagePatient_uuid_key" ON "LanguagePatient"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LanguagePatient_patientId_languageId_key" ON "LanguagePatient"("patientId", "languageId");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageStaff_uuid_key" ON "LanguageStaff"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "LanguageStaff_staffId_languageId_key" ON "LanguageStaff"("staffId", "languageId");

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_pronounId_fkey" FOREIGN KEY ("pronounId") REFERENCES "Pronoun"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_maritalStatusId_fkey" FOREIGN KEY ("maritalStatusId") REFERENCES "MaritalStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_etnicityId_fkey" FOREIGN KEY ("etnicityId") REFERENCES "Etnicity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_pronounId_fkey" FOREIGN KEY ("pronounId") REFERENCES "Pronoun"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_maritalStatusId_fkey" FOREIGN KEY ("maritalStatusId") REFERENCES "MaritalStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_etnicityId_fkey" FOREIGN KEY ("etnicityId") REFERENCES "Etnicity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguagePatient" ADD CONSTRAINT "LanguagePatient_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguagePatient" ADD CONSTRAINT "LanguagePatient_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageStaff" ADD CONSTRAINT "LanguageStaff_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LanguageStaff" ADD CONSTRAINT "LanguageStaff_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
