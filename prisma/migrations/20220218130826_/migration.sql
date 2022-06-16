-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "contactOfficeHours" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "contactOutsideOfficeHours" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "emailPatient" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "leaveVoiceMail" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "smsPatient" BOOLEAN NOT NULL DEFAULT false;
