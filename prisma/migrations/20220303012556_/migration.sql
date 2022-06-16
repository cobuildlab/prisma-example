-- CreateTable
CREATE TABLE "Provider" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "staffId" BIGINT NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_uuid_key" ON "Provider"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_staffId_key" ON "Provider"("staffId");

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
