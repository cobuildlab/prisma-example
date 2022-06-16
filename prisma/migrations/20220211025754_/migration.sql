/*
  Warnings:

  - You are about to drop the column `eventType` on the `EventLog` table. All the data in the column will be lost.
  - You are about to drop the column `meta` on the `EventLog` table. All the data in the column will be lost.
  - You are about to drop the column `objectType` on the `EventLog` table. All the data in the column will be lost.
  - You are about to drop the column `objectUuid` on the `EventLog` table. All the data in the column will be lost.
  - Added the required column `args` to the `EventLog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EventLog" DROP CONSTRAINT "EventLog_userId_fkey";

-- DropIndex
DROP INDEX "EventLog_eventType_idx";

-- DropIndex
DROP INDEX "EventLog_objectType_idx";

-- DropIndex
DROP INDEX "EventLog_objectUuid_idx";

-- AlterTable
ALTER TABLE "EventLog" DROP COLUMN "eventType",
DROP COLUMN "meta",
DROP COLUMN "objectType",
DROP COLUMN "objectUuid",
ADD COLUMN     "args" JSONB NOT NULL,
ADD COLUMN     "operationName" TEXT,
ADD COLUMN     "operationType" TEXT,
ALTER COLUMN "userId" DROP NOT NULL;

-- DropEnum
DROP TYPE "EventType";

-- CreateIndex
CREATE INDEX "EventLog_operationName_idx" ON "EventLog"("operationName");

-- CreateIndex
CREATE INDEX "EventLog_operationType_idx" ON "EventLog"("operationType");

-- AddForeignKey
ALTER TABLE "EventLog" ADD CONSTRAINT "EventLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
