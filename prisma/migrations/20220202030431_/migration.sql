-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "userId" BIGINT;

-- CreateTable
CREATE TABLE "UserClientRole" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "roleId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "clientId" BIGINT NOT NULL,

    CONSTRAINT "UserClientRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserOrganizationRole" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "roleId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "organizationId" BIGINT NOT NULL,

    CONSTRAINT "UserOrganizationRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLocationRole" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "roleId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "locationId" BIGINT NOT NULL,

    CONSTRAINT "UserLocationRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserClientRole_uuid_key" ON "UserClientRole"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "UserClientRole_roleId_userId_clientId_key" ON "UserClientRole"("roleId", "userId", "clientId");

-- CreateIndex
CREATE UNIQUE INDEX "UserOrganizationRole_uuid_key" ON "UserOrganizationRole"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "UserOrganizationRole_roleId_userId_organizationId_key" ON "UserOrganizationRole"("roleId", "userId", "organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLocationRole_uuid_key" ON "UserLocationRole"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "UserLocationRole_roleId_userId_locationId_key" ON "UserLocationRole"("roleId", "userId", "locationId");

-- AddForeignKey
ALTER TABLE "UserClientRole" ADD CONSTRAINT "UserClientRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserClientRole" ADD CONSTRAINT "UserClientRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserClientRole" ADD CONSTRAINT "UserClientRole_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrganizationRole" ADD CONSTRAINT "UserOrganizationRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrganizationRole" ADD CONSTRAINT "UserOrganizationRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOrganizationRole" ADD CONSTRAINT "UserOrganizationRole_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocationRole" ADD CONSTRAINT "UserLocationRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocationRole" ADD CONSTRAINT "UserLocationRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocationRole" ADD CONSTRAINT "UserLocationRole_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
