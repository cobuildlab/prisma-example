-- AlterTable
ALTER TABLE "Patient" ADD COLUMN "configName" regconfig DEFAULT 'english'::regconfig;

ALTER TABLE "Patient" ADD COLUMN "ssn" TEXT;

ALTER TABLE "Patient"
    ADD COLUMN "fullText" tsvector
               GENERATED ALWAYS AS (to_tsvector("configName", coalesce("firstName", '') || ' ' || coalesce("middleName", '') || '' || coalesce("lastName", '') || '' || coalesce("ssn", ''))) STORED;

CREATE INDEX "fullText_idx" ON "Patient" USING GIN ("fullText");
