/*
  Warnings:

  - A unique constraint covering the columns `[name,level]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_level_key" ON "Permission"("name", "level");
