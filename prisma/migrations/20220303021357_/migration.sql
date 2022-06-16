-- CreateEnum
CREATE TYPE "AlergySeverity" AS ENUM ('MILD', 'MODERATE', 'SEVERE', 'MINIMAL');

-- CreateTable
CREATE TABLE "Allergy" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,
    "patientId" BIGINT NOT NULL,
    "allergyReactionTypeId" BIGINT NOT NULL,

    CONSTRAINT "Allergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AllergyReactionType" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,
    "patientId" BIGINT NOT NULL,

    CONSTRAINT "AllergyReactionType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Allergy_uuid_key" ON "Allergy"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "AllergyReactionType_uuid_key" ON "AllergyReactionType"("uuid");

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_allergyReactionTypeId_fkey" FOREIGN KEY ("allergyReactionTypeId") REFERENCES "AllergyReactionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AllergyReactionType" ADD CONSTRAINT "AllergyReactionType_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
