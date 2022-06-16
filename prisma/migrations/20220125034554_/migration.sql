-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('PROFILE_PICTURE', 'OTHER');

-- CreateTable
CREATE TABLE "PatientFile" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "filename" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "extension" TEXT,
    "type" "FileType" NOT NULL,
    "patientId" BIGINT NOT NULL,

    CONSTRAINT "PatientFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PatientEmailAddress" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "emailAddressId" BIGINT NOT NULL,

    CONSTRAINT "PatientEmailAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailAddress" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "email" TEXT NOT NULL,

    CONSTRAINT "EmailAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PatientFile_uuid_key" ON "PatientFile"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientEmailAddress_uuid_key" ON "PatientEmailAddress"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientEmailAddress_emailAddressId_patientId_key" ON "PatientEmailAddress"("emailAddressId", "patientId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailAddress_uuid_key" ON "EmailAddress"("uuid");

-- AddForeignKey
ALTER TABLE "PatientFile" ADD CONSTRAINT "PatientFile_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientEmailAddress" ADD CONSTRAINT "PatientEmailAddress_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientEmailAddress" ADD CONSTRAINT "PatientEmailAddress_emailAddressId_fkey" FOREIGN KEY ("emailAddressId") REFERENCES "EmailAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
