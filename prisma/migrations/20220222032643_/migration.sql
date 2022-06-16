/*
  Warnings:

  - You are about to drop the column `extension` on the `PatientFile` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `PatientFile` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `PatientFile` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `PatientFile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[patientId,fileId]` on the table `PatientFile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileId` to the `PatientFile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fileTypeId` to the `PatientFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatientFile" DROP COLUMN "extension",
DROP COLUMN "filename",
DROP COLUMN "type",
DROP COLUMN "url",
ADD COLUMN     "fileId" BIGINT NOT NULL,
ADD COLUMN     "fileTypeId" BIGINT NOT NULL;

-- DropEnum
DROP TYPE "FileType";

-- CreateTable
CREATE TABLE "File" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT,
    "fileUuId" TEXT NOT NULL,
    "meta" JSONB,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FileType" (
    "id" BIGSERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "FileType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "File_uuid_key" ON "File"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "FileType_uuid_key" ON "FileType"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "PatientFile_patientId_fileId_key" ON "PatientFile"("patientId", "fileId");

-- AddForeignKey
ALTER TABLE "PatientFile" ADD CONSTRAINT "PatientFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PatientFile" ADD CONSTRAINT "PatientFile_fileTypeId_fkey" FOREIGN KEY ("fileTypeId") REFERENCES "FileType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
