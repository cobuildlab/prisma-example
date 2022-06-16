-- CreateTable
CREATE TABLE "Vaccination" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "disease" TEXT NOT NULL,
    "vaccione" TEXT NOT NULL,
    "nextVaccination" TIMESTAMP(3),
    "lastVaccination" TIMESTAMP(3),
    "patientId" BIGINT NOT NULL,
    "vaccionationStatusId" BIGINT NOT NULL,

    CONSTRAINT "Vaccination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaccinationStatus" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "VaccinationStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vaccination_uuid_key" ON "Vaccination"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "VaccinationStatus_uuid_key" ON "VaccinationStatus"("uuid");

-- AddForeignKey
ALTER TABLE "Vaccination" ADD CONSTRAINT "Vaccination_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vaccination" ADD CONSTRAINT "Vaccination_vaccionationStatusId_fkey" FOREIGN KEY ("vaccionationStatusId") REFERENCES "VaccinationStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
