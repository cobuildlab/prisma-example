import {
  CreatePatientResolver,
  ResolversEnhanceMap,
  FindManyClientResolver,
  FindFirstClientResolver,
  FindUniqueClientResolver,
  CreateClientResolver,
  CreateOrganizationResolver,
  FindManyPatientResolver,
  FindFirstPatientResolver,
  FindUniquePatientResolver,
  FindManyOrganizationResolver,
  FindFirstOrganizationResolver,
  FindUniqueOrganizationResolver,
  CreatePatientContactResolver,
  FindManyPatientContactResolver,
  PatientRelationsResolver,
  FindManyEventLogResolver,
  CreateUserClientRoleResolver,
  CreateRoleResolver,
  CreateUserLocationRoleResolver,
  CreateUserOrganizationRoleResolver,
  FindManyRoleResolver,
  FindManyUserClientRoleResolver,
  FindManyUserLocationRoleResolver,
  FindManyUserOrganizationRoleResolver,
  CreatePatientAddressResolver,
  FindManyPatientAddressResolver,
  CreateAddressResolver,
  FindManyAddressResolver,
  PatientAddressRelationsResolver,
  OrganizationRelationsResolver,
  DeleteOrganizationResolver,
  CreateLocationResolver,
  FindFirstLocationResolver,
  FindUniqueLocationResolver,
  FindUniqueUserClientRoleResolver,
  FindUniqueUserLocationRoleResolver,
  FindUniqueUserOrganizationRoleResolver,
  FindUniqueRoleResolver,
  UpdateOrganizationResolver,
  LocationRelationsResolver,
  DeleteLocationResolver,
  UpdateLocationResolver,
  EventLogRelationsResolver,
  FindUniquePermissionResolver,
  FindFirstPermissionResolver,
  FindManyPermissionResolver,
  FindFirstRolePermissionResolver,
  CreateFileResolver,
  FindFirstFileResolver,
  FindUniqueFileResolver,
  FileRelationsResolver,
  FindManyFileResolver,
  CreatePatientFileResolver,
  FindFirstPatientFileResolver,
  FindUniquePatientFileResolver,
  PatientFileRelationsResolver,
  FindManyPatientFileResolver,
  CreateFileTypeResolver,
  FindFirstFileTypeResolver,
  FindUniqueFileTypeResolver,
  FileTypeRelationsResolver,
  FindManyFileTypeResolver,
  CreateFamilyHistoryResolver,
  FindFirstFamilyHistoryResolver,
  FindUniqueFamilyHistoryResolver,
  FamilyHistoryRelationsResolver,
  FindManyFamilyHistoryResolver,
  CreateFamilyHistoryMemberTypeResolver,
  FindFirstFamilyHistoryMemberTypeResolver,
  FindUniqueFamilyHistoryMemberTypeResolver,
  FamilyHistoryMemberTypeRelationsResolver,
  FindManyFamilyHistoryMemberTypeResolver,
  CreateFamilyHistoryHereditaryRiskResolver,
  FindFirstFamilyHistoryHereditaryRiskResolver,
  FindUniqueFamilyHistoryHereditaryRiskResolver,
  FamilyHistoryHereditaryRiskRelationsResolver,
  FindManyFamilyHistoryHereditaryRiskResolver,
  CreateProviderResolver,
  FindFirstProviderResolver,
  FindUniqueProviderResolver,
  ProviderRelationsResolver,
  FindManyProviderResolver,
  CreateAppointmentResolver,
  FindFirstAppointmentResolver,
  FindUniqueAppointmentResolver,
  AppointmentRelationsResolver,
  FindManyAppointmentResolver,
  // Medication
  CreateMedicationResolver,
  FindFirstMedicationResolver,
  FindUniqueMedicationResolver,
  FindManyMedicationResolver,
  // Medication Record
  CreateMedicationRecordResolver,
  FindFirstMedicationRecordResolver,
  FindUniqueMedicationRecordResolver,
  FindManyMedicationRecordResolver,
  FindManyAllergyResolver,
  CreateVaccinationStatusResolver,
  FindFirstVaccinationStatusResolver,
  FindUniqueVaccinationStatusResolver,
  FindManyVaccinationStatusResolver,
  CreateAllergyResolver,
  FindFirstAllergyResolver,
  FindUniqueAllergyResolver,
  CreateAllergyReactionTypeResolver,
  FindFirstAllergyReactionTypeResolver,
  FindUniqueAllergyReactionTypeResolver,
  FindManyAllergyReactionTypeResolver,
  CreateVaccinationResolver,
  FindFirstVaccinationResolver,
  FindUniqueVaccinationResolver,
  FindManyVaccinationResolver,
  CreateStaffTypeResolver,
  FindFirstStaffTypeResolver,
  FindManyStaffTypeResolver,
  FindUniqueStaffTypeResolver,
  ClientRelationsResolver,
  AllergyRelationsResolver,
  CreateStaffResolver,
  FindFirstStaffResolver,
  FindUniqueStaffResolver,
  FindManyStaffResolver,
  UserOrganizationRoleRelationsResolver,
  UserRelationsResolver,
  StaffTypeRelationsResolver,
  StaffRelationsResolver,
  UserLocationRoleRelationsResolver,
  RoleRelationsResolver,
  UserClientRoleRelationsResolver,
  PermissionRelationsResolver,
  RolePermissionRelationsResolver,
  UpdateStaffResolver,
  UpdateRoleResolver,
  DeleteManyRoleResolver,
  DeleteManyRolePermissionResolver,
  DeleteRoleResolver,
  DeleteManyUserOrganizationRoleResolver,
  DeleteManyUserLocationRoleResolver,
  CreateManyUserOrganizationRoleResolver,
  CreateManyUserLocationRoleResolver,
  DeleteUserClientRoleResolver,
  DeleteManyUserClientRoleResolver,
  DeleteStaffResolver,
  CreateVaccinationRecordResolver,
  FindFirstVaccinationRecordResolver,
  FindUniqueVaccinationRecordResolver,
  FindManyVaccinationRecordResolver,
  VaccinationRelationsResolver,
  UpdatePatientResolver,
  MedicationRelationsResolver,
} from '../../prisma/generated/type-graphql';
import { CustomPatientResolver } from '../modules/patient/resolvers';
import {
  patientActionsConfig,
  patientContactsActionsConfig,
  patientAddressesActionsConfig,
} from '../modules/patient/permissions';
import { NonEmptyArray } from 'type-graphql';
import { organizationActionsConfig } from '../modules/organization/permissions';
import { clientActionsConfig } from '../modules/client/permissions';
import { eventsLogActionsConfig } from '../modules/event-log/permissions';
import {
  userActionsConfig,
  userClientRoleActionsConfig,
  userLocationRoleActionsConfig,
  userOrganizationRoleActionsConfig,
} from '../modules/user/permissions';
import { addressActionsConfig } from '../modules/address/permissions';
import { locationActionsConfig } from '../modules/location/permissions';
import { patientFileActionsConfig } from '../modules/patient-file/permissions';
import { fileTypeFileActionsConfig } from '../modules/file-type/permissions';
import { permissionActionsConfig } from '../modules/permissions/permissions';
import { CustomFileResolver } from '../modules/file/resolvers';
import { fileActionsConfig } from '../modules/file/permissions';
import {
  familyHistoryActionsConfig,
  familyHistoryHereditaryRiskActionsConfig,
  familyHistoryMemberTypeActionsConfig,
} from '../modules/family-history/permissions';
import { providerActionsConfig } from '../modules/provider/permissions';
import { appointmentActionsConfig } from '../modules/apppointment/permissions';
import { medicationActionsConfig } from '../modules/medication/permissions';
import { vaccinationActionsConfig } from '../modules/vaccination/permissions';
import { vaccinationStatusActionsConfig } from '../modules/vaccination-status/permissions';
import { vaccinationRecordActionsConfig } from '../modules/vaccination-record/permissions';
import { allergyActionsConfig } from '../modules/allergy/permissions';
import { allergyReactionTypeActionsConfig } from '../modules/allergy-types/permissions';
import { staffTypeActionsConfig } from '../modules/staff-type/permissions';
import { roleActionsConfig } from '../modules/role/permissions';
import { staffActionsConfig } from '../modules/staff/permissions';
import { rolePermissionActionsConfig } from '../modules/role-permission/permissions';

export const resolvers: NonEmptyArray<Function> = [
  // Role
  CreateRoleResolver,
  FindManyRoleResolver,
  FindUniqueRoleResolver,
  RoleRelationsResolver,
  UpdateRoleResolver,
  DeleteRoleResolver,
  DeleteManyRoleResolver,
  // User Client Role
  CreateUserClientRoleResolver,
  FindManyUserClientRoleResolver,
  FindUniqueUserClientRoleResolver,
  UserClientRoleRelationsResolver,
  DeleteUserClientRoleResolver,
  DeleteManyUserClientRoleResolver,
  // User Location Role
  CreateUserLocationRoleResolver,
  CreateManyUserLocationRoleResolver,
  FindManyUserLocationRoleResolver,
  FindUniqueUserLocationRoleResolver,
  UserLocationRoleRelationsResolver,
  DeleteManyUserLocationRoleResolver,
  // User Organization Role
  CreateUserOrganizationRoleResolver,
  CreateManyUserOrganizationRoleResolver,
  FindManyUserOrganizationRoleResolver,
  FindUniqueUserOrganizationRoleResolver,
  UserOrganizationRoleRelationsResolver,
  DeleteManyUserOrganizationRoleResolver,
  // Patients
  CreatePatientResolver,
  UpdatePatientResolver,
  FindManyPatientResolver,
  FindFirstPatientResolver,
  FindUniquePatientResolver,
  PatientRelationsResolver,
  // Patient Files
  CustomFileResolver,
  CreatePatientFileResolver,
  FindFirstPatientFileResolver,
  FindUniquePatientFileResolver,
  PatientFileRelationsResolver,
  FindManyPatientFileResolver,
  // PatientContact
  CreatePatientContactResolver,
  FindManyPatientContactResolver,
  // PatientAddress
  CreatePatientAddressResolver,
  FindManyPatientAddressResolver,
  PatientAddressRelationsResolver,
  // Address
  CreateAddressResolver,
  FindManyAddressResolver,
  // Clients
  CreateClientResolver,
  FindManyClientResolver,
  FindFirstClientResolver,
  FindUniqueClientResolver,
  ClientRelationsResolver,
  // Organizations
  CreateOrganizationResolver,
  FindManyOrganizationResolver,
  FindFirstOrganizationResolver,
  FindUniqueOrganizationResolver,
  OrganizationRelationsResolver,
  DeleteOrganizationResolver,
  UpdateOrganizationResolver,
  // Locations
  CreateLocationResolver,
  FindFirstLocationResolver,
  FindUniqueLocationResolver,
  LocationRelationsResolver,
  DeleteLocationResolver,
  UpdateLocationResolver,
  // EventsLog
  FindManyEventLogResolver,
  EventLogRelationsResolver,
  // Permissions
  FindFirstPermissionResolver,
  FindUniquePermissionResolver,
  FindManyPermissionResolver,
  PermissionRelationsResolver,
  // Role Permissions
  FindFirstRolePermissionResolver,
  FindUniquePermissionResolver,
  RolePermissionRelationsResolver,
  DeleteManyRolePermissionResolver,
  // Custom,
  CustomPatientResolver,
  // File
  CreateFileResolver,
  FindFirstFileResolver,
  FindUniqueFileResolver,
  FileRelationsResolver,
  FindManyFileResolver,
  // FileType
  CreateFileTypeResolver,
  FindFirstFileTypeResolver,
  FindUniqueFileTypeResolver,
  FileTypeRelationsResolver,
  FindManyFileTypeResolver,
  // FamilyHistory
  CreateFamilyHistoryResolver,
  FindFirstFamilyHistoryResolver,
  FindUniqueFamilyHistoryResolver,
  FamilyHistoryRelationsResolver,
  FindManyFamilyHistoryResolver,
  // FamilyHistoryMemberType
  CreateFamilyHistoryMemberTypeResolver,
  FindFirstFamilyHistoryMemberTypeResolver,
  FindUniqueFamilyHistoryMemberTypeResolver,
  FamilyHistoryMemberTypeRelationsResolver,
  FindManyFamilyHistoryMemberTypeResolver,
  // FamilyHistoryHereditaryRisk
  CreateFamilyHistoryHereditaryRiskResolver,
  FindFirstFamilyHistoryHereditaryRiskResolver,
  FindUniqueFamilyHistoryHereditaryRiskResolver,
  FamilyHistoryHereditaryRiskRelationsResolver,
  FindManyFamilyHistoryHereditaryRiskResolver,
  // Provider
  CreateProviderResolver,
  FindFirstProviderResolver,
  FindUniqueProviderResolver,
  ProviderRelationsResolver,
  FindManyProviderResolver,
  // Appointment
  CreateAppointmentResolver,
  FindFirstAppointmentResolver,
  FindUniqueAppointmentResolver,
  AppointmentRelationsResolver,
  FindManyAppointmentResolver,
  // Medication
  CreateMedicationResolver,
  FindFirstMedicationResolver,
  FindUniqueMedicationResolver,
  FindManyMedicationResolver,
  MedicationRelationsResolver,
  // Medication Record
  CreateMedicationRecordResolver,
  FindFirstMedicationRecordResolver,
  FindUniqueMedicationRecordResolver,
  FindManyMedicationRecordResolver,
  // Vaccination
  CreateVaccinationResolver,
  FindFirstVaccinationResolver,
  FindUniqueVaccinationResolver,
  FindManyVaccinationResolver,
  VaccinationRelationsResolver,
  // VaccinationStatus
  CreateVaccinationStatusResolver,
  FindFirstVaccinationStatusResolver,
  FindUniqueVaccinationStatusResolver,
  FindManyVaccinationStatusResolver,
  // VaccinationRecords
  CreateVaccinationRecordResolver,
  FindFirstVaccinationRecordResolver,
  FindUniqueVaccinationRecordResolver,
  FindManyVaccinationRecordResolver,
  // Allergy
  CreateAllergyResolver,
  FindFirstAllergyResolver,
  FindUniqueAllergyResolver,
  FindManyAllergyResolver,
  AllergyRelationsResolver,
  // AllergyReactionType
  CreateAllergyReactionTypeResolver,
  FindFirstAllergyReactionTypeResolver,
  FindUniqueAllergyReactionTypeResolver,
  FindManyAllergyReactionTypeResolver,
  // Staff Type
  CreateStaffTypeResolver,
  FindFirstStaffTypeResolver,
  FindUniqueStaffTypeResolver,
  FindManyStaffTypeResolver,
  StaffTypeRelationsResolver,
  // Staff
  CreateStaffResolver,
  FindFirstStaffResolver,
  FindUniqueStaffResolver,
  FindManyStaffResolver,
  StaffRelationsResolver,
  UpdateStaffResolver,
  DeleteStaffResolver,
  // User
  UserRelationsResolver,
];

export const resolversEnhanceMap: ResolversEnhanceMap = {
  Patient: patientActionsConfig,
  Organization: organizationActionsConfig,
  Client: clientActionsConfig,
  EventLog: eventsLogActionsConfig,
  PatientContact: patientContactsActionsConfig,
  PatientAddress: patientAddressesActionsConfig,
  Role: roleActionsConfig,
  UserClientRole: userClientRoleActionsConfig,
  UserLocationRole: userLocationRoleActionsConfig,
  UserOrganizationRole: userOrganizationRoleActionsConfig,
  Address: addressActionsConfig,
  Location: locationActionsConfig,
  Permission: permissionActionsConfig,
  PatientFile: patientFileActionsConfig,
  FileType: fileTypeFileActionsConfig,
  File: fileActionsConfig,
  FamilyHistory: familyHistoryActionsConfig,
  FamilyHistoryMemberType: familyHistoryMemberTypeActionsConfig,
  FamilyHistoryHereditaryRisk: familyHistoryHereditaryRiskActionsConfig,
  Provider: providerActionsConfig,
  Appointment: appointmentActionsConfig,
  Medication: medicationActionsConfig,
  Vaccination: vaccinationActionsConfig,
  VaccinationStatus: vaccinationStatusActionsConfig,
  VaccinationRecord: vaccinationRecordActionsConfig,
  Allergy: allergyActionsConfig,
  AllergyReactionType: allergyReactionTypeActionsConfig,
  StaffType: staffTypeActionsConfig,
  Staff: staffActionsConfig,
  User: userActionsConfig,
  RolePermission: rolePermissionActionsConfig,
};