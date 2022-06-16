-- CreateTable
CREATE TABLE "FamilyHistory" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "patientId" BIGINT NOT NULL,
    "issue" TEXT NOT NULL,
    "description" TEXT,
    "familyHistoryMemberTypeId" BIGINT NOT NULL,
    "familyHistoryHereditaryRiskId" BIGINT NOT NULL,

    CONSTRAINT "FamilyHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilyHistoryMemberType" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "FamilyHistoryMemberType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilyHistoryHereditaryRisk" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "FamilyHistoryHereditaryRisk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FamilyHistory_uuid_key" ON "FamilyHistory"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyHistoryMemberType_uuid_key" ON "FamilyHistoryMemberType"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyHistoryMemberType_name_key" ON "FamilyHistoryMemberType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyHistoryHereditaryRisk_uuid_key" ON "FamilyHistoryHereditaryRisk"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FamilyHistoryHereditaryRisk_name_key" ON "FamilyHistoryHereditaryRisk"("name");

-- AddForeignKey
ALTER TABLE "FamilyHistory" ADD CONSTRAINT "FamilyHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyHistory" ADD CONSTRAINT "FamilyHistory_familyHistoryMemberTypeId_fkey" FOREIGN KEY ("familyHistoryMemberTypeId") REFERENCES "FamilyHistoryMemberType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyHistory" ADD CONSTRAINT "FamilyHistory_familyHistoryHereditaryRiskId_fkey" FOREIGN KEY ("familyHistoryHereditaryRiskId") REFERENCES "FamilyHistoryHereditaryRisk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
