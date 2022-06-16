import {
  AuthLevel,
  AppointmentStatus,
  AppointmentType,
  AddressType,
  AllergySeverity,
  AllergySource,
  AllergyCategory,
  MedicationType,
} from '@prisma/client';
import { PRISMA } from '../shared/db';

export const createTestData = async (): Promise<void> => {
  const staffType = [
    await PRISMA.staffType.create({ data: { name: 'Physician' } }),
    await PRISMA.staffType.create({ data: { name: 'Billing Specialist' } }),
    await PRISMA.staffType.create({ data: { name: 'Billing Manager' } }),
    await PRISMA.staffType.create({ data: { name: 'HR Specialist' } }),
    await PRISMA.staffType.create({ data: { name: 'HR Manager' } }),
  ];

  const permission = [
    await PRISMA.permission.create({
      data: {
        name: 'Create Staff',
        description: 'Permission to create new staff',
        level: AuthLevel.CLIENT,
      },
    }),
    await PRISMA.permission.create({
      data: {
        name: 'Delete Staff',
        description: 'Permission to delete staff',
        level: AuthLevel.CLIENT,
      },
    }),
    await PRISMA.permission.create({
      data: {
        name: 'Create Patients',
        description: 'Permission to create new patients',
        level: AuthLevel.CLIENT,
      },
    }),
    await PRISMA.permission.create({
      data: {
        name: 'Delete Patients',
        description: 'Permission to delete patients',
        level: AuthLevel.CLIENT,
      },
    }),
    await PRISMA.permission.create({
      data: {
        name: 'Create User Roles',
        description: 'Permission to create user roles',
        level: AuthLevel.CLIENT,
      },
    }),
    await PRISMA.permission.create({
      data: {
        name: 'Delete User Roles',
        description: 'Permission to delete user roles',
        level: AuthLevel.CLIENT,
      },
    }),
  ];

  const client = [
    await PRISMA.client.create({ data: { name: 'Banner Health Services, Inc.' } }),
    await PRISMA.client.create({ data: { name: 'Test Client' } }),
  ];

  const systemRoles = [
    await PRISMA.role.create({
      data: {
        name: 'IS_MEMBER',
        description: 'IS_MEMBER',
        level: AuthLevel.SYSTEM,
        clientId: client[0].id,
      },
    }),
    await PRISMA.role.create({
      data: {
        name: 'IS_MEMBER',
        description: 'IS_MEMBER',
        level: AuthLevel.SYSTEM,
        clientId: client[1].id,
      },
    }),
  ];

  const clientRoles = [
    await PRISMA.role.create({
      data: {
        name: 'Admin',
        description: 'Administration',
        level: AuthLevel.CLIENT,
        clientId: client[0].id,
      },
    }),
    await PRISMA.role.create({
      data: {
        name: 'Billing',
        description: 'All Billing Staff, including support',
        level: AuthLevel.CLIENT,
        clientId: client[0].id,
      },
    }),
    await PRISMA.role.create({
      data: {
        name: 'Physicians',
        description: 'Doctors and Surgeons',
        level: AuthLevel.CLIENT,
        clientId: client[0].id,
      },
    }),
    await PRISMA.role.create({
      data: {
        name: 'HR',
        description: 'All HR staff',
        level: AuthLevel.CLIENT,
        clientId: client[0].id,
      },
    }),
  ];

  // Admin
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[0].id, permissionId: permission[0].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[0].id, permissionId: permission[1].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[0].id, permissionId: permission[2].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[0].id, permissionId: permission[3].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[0].id, permissionId: permission[4].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[0].id, permissionId: permission[5].id },
  });

  // Physicians
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[2].id, permissionId: permission[0].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[2].id, permissionId: permission[2].id },
  });
  await PRISMA.rolePermission.create({
    data: { roleId: clientRoles[2].id, permissionId: permission[3].id },
  });

  const organization = [
    await PRISMA.organization.create({
      data: { name: 'Banner Health Hospital', clientId: client[0].id },
    }),
    await PRISMA.organization.create({ data: { name: 'Banner Veterans', clientId: client[0].id } }),
    await PRISMA.organization.create({
      data: { name: 'Banner Physical Therapy', clientId: client[0].id },
    }),
  ];

  const location = [
    await PRISMA.location.create({
      data: { name: 'Cardiology Department', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Emergency Department', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Neurology', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Intensive care unit (ICU)', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'OBGYN Department', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Oncology Deptartment', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Radiology Department', organizationId: organization[0].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Cardiology Department', organizationId: organization[1].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Intensive care unit (ICU)', organizationId: organization[1].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Neurology', organizationId: organization[1].id },
    }),
    await PRISMA.location.create({
      data: { name: 'OBGYN Department', organizationId: organization[1].id },
    }),
    await PRISMA.location.create({
      data: { name: 'Radiology Department', organizationId: organization[1].id },
    }),
  ];

  const user = [
    await PRISMA.user.create({ data: { email: 'abigail.adams@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'brian.tonton@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Sarah.Auskey@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Joey.Bosa@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Haley.Braun@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Joshua.Brown@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Tawny.Campbell@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Billy.Cope@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Tammy.Conrad@bannerhealth.com' } }),
    await PRISMA.user.create({ data: { email: 'Tanya.Colorado@bannerhealth.com' } }),
  ];

  const staff = [
    await PRISMA.staff.create({
      data: {
        firstName: 'Abigale',
        middleName: '',
        lastName: 'Adams',
        clientId: client[0].id,
        staffTypeId: staffType[1].id,
        userId: user[0].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Brian',
        middleName: 'Athertonatonatonaton',
        lastName: 'tonton',
        clientId: client[0].id,
        staffTypeId: staffType[0].id,
        userId: user[1].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Sarah',
        middleName: '',
        lastName: 'Auskey',
        clientId: client[0].id,
        staffTypeId: staffType[4].id,
        userId: user[2].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Joey',
        middleName: '',
        lastName: 'Bosa',
        clientId: client[0].id,
        staffTypeId: staffType[0].id,
        userId: user[3].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Haley',
        middleName: '',
        lastName: 'Braun',
        clientId: client[0].id,
        staffTypeId: staffType[3].id,
        userId: user[4].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Joshua',
        middleName: '',
        lastName: 'Brown',
        clientId: client[0].id,
        staffTypeId: staffType[0].id,
        userId: user[5].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Tawny',
        middleName: '',
        lastName: 'Campbell',
        clientId: client[0].id,
        staffTypeId: staffType[0].id,
        userId: user[6].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Billy',
        middleName: '',
        lastName: 'Cope',
        clientId: client[0].id,
        staffTypeId: staffType[2].id,
        userId: user[7].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Tammy',
        middleName: '',
        lastName: 'Conrad',
        clientId: client[0].id,
        staffTypeId: staffType[3].id,
        userId: user[8].id,
      },
    }),
    await PRISMA.staff.create({
      data: {
        firstName: 'Tanya',
        middleName: '',
        lastName: 'Colorado',
        clientId: client[0].id,
        staffTypeId: staffType[3].id,
        userId: user[9].id,
      },
    }),
  ];

  const userClientRoles = [
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[0].id, roleId: clientRoles[1].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[1].id, roleId: clientRoles[2].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[2].id, roleId: clientRoles[0].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[3].id, roleId: clientRoles[2].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[4].id, roleId: clientRoles[3].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[5].id, roleId: clientRoles[2].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[6].id, roleId: clientRoles[0].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[7].id, roleId: clientRoles[2].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[8].id, roleId: clientRoles[0].id },
    }),
    await PRISMA.userClientRole.create({
      data: { clientId: client[0].id, userId: user[9].id, roleId: clientRoles[0].id },
    }),
  ];

  await PRISMA.userOrganizationRole.create({
    data: { userId: user[0].id, organizationId: organization[0].id, roleId: systemRoles[0].id },
  });
  await PRISMA.userOrganizationRole.create({
    data: { userId: user[0].id, organizationId: organization[1].id, roleId: systemRoles[0].id },
  });
  await PRISMA.userOrganizationRole.create({
    data: { userId: user[1].id, organizationId: organization[2].id, roleId: systemRoles[0].id },
  });

  await PRISMA.userLocationRole.create({
    data: { userId: user[1].id, locationId: location[0].id, roleId: systemRoles[0].id },
  });
  await PRISMA.userLocationRole.create({
    data: { userId: user[4].id, locationId: location[1].id, roleId: systemRoles[0].id },
  });
  await PRISMA.userLocationRole.create({
    data: { userId: user[5].id, locationId: location[2].id, roleId: systemRoles[0].id },
  });

  const patient = [
    await PRISMA.patient.create({
      data: { firstName: 'Alex', middleName: 'Jay', lastName: 'Anderson', ssn: '1234578' },
    }),
  ];

  const address = [
    await PRISMA.address.create({
      data: {
        street1: 'Main Steet',
        city: 'New York',
        state: 'New York',
        zipCode: '12345',
        type: AddressType.HOME,
      },
    }),
  ];

  const patientAddress = [
    await PRISMA.patientAddress.create({
      data: { patientId: patient[0].id, addressId: address[0].id },
    }),
  ];

  const provider = [
    await PRISMA.provider.create({ data: { staffId: staff[0].id } }),
    await PRISMA.provider.create({ data: { staffId: staff[1].id } }),
  ];

  const appointment = [
    await PRISMA.appointment.create({
      data: {
        providerId: provider[0].id,
        locationId: location[0].id,
        patientId: patient[0].id,
        status: AppointmentStatus.DRAFT,
        type: AppointmentType.FOLLOW_UP,
        date: new Date('2023-01-01'),
      },
    }),
    await PRISMA.appointment.create({
      data: {
        providerId: provider[0].id,
        locationId: location[0].id,
        patientId: patient[0].id,
        status: AppointmentStatus.CANCELLED,
        type: AppointmentType.FOLLOW_UP,
        date: new Date('2022-12-24'),
      },
    }),
    await PRISMA.appointment.create({
      data: {
        providerId: provider[1].id,
        locationId: location[0].id,
        patientId: patient[0].id,
        status: AppointmentStatus.SCHEDULED,
        type: AppointmentType.FOLLOW_UP,
        date: new Date('2020-12-01'),
        notes: 'Some notes\nTest',
      },
    }),
    await PRISMA.appointment.create({
      data: {
        providerId: provider[0].id,
        locationId: location[0].id,
        patientId: patient[0].id,
        status: AppointmentStatus.SCHEDULED,
        type: AppointmentType.INITIAL,
        date: new Date('2020-12-01'),
        notes: 'Some notes\nTest',
      },
    }),
  ];

  const familyHistoryHereditaryRisk = [
    await PRISMA.familyHistoryHereditaryRisk.create({ data: { name: 'Exists' } }),
    await PRISMA.familyHistoryHereditaryRisk.create({ data: { name: 'Non-existent' } }),
  ];

  const familyHistoryMemberType = [
    await PRISMA.familyHistoryMemberType.create({ data: { name: 'Mother' } }),
    await PRISMA.familyHistoryMemberType.create({ data: { name: 'Father' } }),
    await PRISMA.familyHistoryMemberType.create({ data: { name: 'Grandmother (maternal)' } }),
    await PRISMA.familyHistoryMemberType.create({ data: { name: 'Uncle (paternal)' } }),
  ];

  const familyHistory = [
    await PRISMA.familyHistory.create({
      data: {
        patientId: patient[0].id,
        issue: 'Breast Cancer',
        description: 'at Age 40',
        familyHistoryHereditaryRiskId: familyHistoryHereditaryRisk[0].id,
        familyHistoryMemberTypeId: familyHistoryMemberType[0].id,
      },
    }),
    await PRISMA.familyHistory.create({
      data: {
        patientId: patient[0].id,
        issue: 'Lung Cancer',
        description: '',
        familyHistoryHereditaryRiskId: familyHistoryHereditaryRisk[1].id,
        familyHistoryMemberTypeId: familyHistoryMemberType[3].id,
      },
    }),
    await PRISMA.familyHistory.create({
      data: {
        patientId: patient[0].id,
        issue: 'Type 1 Diabetes Mellitus',
        description:
          'Description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        familyHistoryHereditaryRiskId: familyHistoryHereditaryRisk[0].id,
        familyHistoryMemberTypeId: familyHistoryMemberType[1].id,
      },
    }),
  ];

  const reactionType = [
    await PRISMA.allergyReactionType.create({ data: { name: 'Intolerance' } }),
    await PRISMA.allergyReactionType.create({ data: { name: 'Adverse Effect' } }),
    await PRISMA.allergyReactionType.create({ data: { name: 'Allergy' } }),
  ];

  const allergies = [
    await PRISMA.allergy.create({
      data: {
        patientId: patient[0].id,
        allergyCategory: AllergyCategory.GENERAL,
        name: 'Hayfever',
        testedAt: new Date('2022-01-01'),
        allergyReactionTypeId: reactionType[2].id,
        allergySeverity: AllergySeverity.MODERATE,
        allergySource: AllergySource.TESTED,
      },
    }),
    await PRISMA.allergy.create({
      data: {
        patientId: patient[0].id,
        allergyCategory: AllergyCategory.GENERAL,
        name: 'Latex',
        testedAt: new Date('2022-01-01'),
        allergyReactionTypeId: reactionType[1].id,
        allergySeverity: AllergySeverity.MILD,
        allergySource: AllergySource.TESTED,
      },
    }),
    await PRISMA.allergy.create({
      data: {
        patientId: patient[0].id,
        allergyCategory: AllergyCategory.GENERAL,
        name: 'Peanut',
        allergyReactionTypeId: reactionType[0].id,
        allergySeverity: AllergySeverity.MINIMAL,
        allergySource: AllergySource.VERBAL,
      },
    }),
    await PRISMA.allergy.create({
      data: {
        patientId: patient[0].id,
        allergyCategory: AllergyCategory.MEDICAL,
        name: 'Opioid',
        allergyReactionTypeId: reactionType[0].id,
        allergySeverity: AllergySeverity.SEVERE,
        allergySource: AllergySource.VERBAL,
      },
    }),
    await PRISMA.allergy.create({
      data: {
        patientId: patient[0].id,
        allergyCategory: AllergyCategory.MEDICAL,
        name: 'Penicillin',
        testedAt: new Date('2022-01-01'),
        allergyReactionTypeId: reactionType[0].id,
        allergySeverity: AllergySeverity.VERY_SEVERE,
        allergySource: AllergySource.TESTED,
      },
    }),
    await PRISMA.allergy.create({
      data: {
        patientId: patient[0].id,
        allergyCategory: AllergyCategory.FAMILIAL,
        name: 'Barbiturates',
        description:
          'Description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        testedAt: new Date('2022-01-01'),
        allergyReactionTypeId: reactionType[0].id,
        allergySeverity: AllergySeverity.FATAL,
        allergySource: AllergySource.TESTED,
        sourceDescription: 'Brother',
      },
    }),
  ];

  const vaccinationStatus = [
    await PRISMA.vaccinationStatus.create({ data: { name: 'Overdue' } }),
    await PRISMA.vaccinationStatus.create({ data: { name: 'Up-to-date' } }),
    await PRISMA.vaccinationStatus.create({ data: { name: 'No record' } }),
  ];

  const vaccinations = [
    await PRISMA.vaccination.create({
      data: {
        patientId: patient[0].id,
        vaccinationStatusId: vaccinationStatus[0].id,
        disease: 'Rot-5',
        description: '',
      },
    }),
    await PRISMA.vaccination.create({
      data: {
        patientId: patient[0].id,
        vaccinationStatusId: vaccinationStatus[1].id,
        disease: 'Coronavirus',
        description: '',
      },
    }),
    await PRISMA.vaccination.create({
      data: {
        patientId: patient[0].id,
        vaccinationStatusId: vaccinationStatus[1].id,
        disease: 'Var',
        description: '',
      },
    }),
    await PRISMA.vaccination.create({
      data: {
        patientId: patient[0].id,
        vaccinationStatusId: vaccinationStatus[1].id,
        disease: 'MMRV',
        description: '',
      },
    }),
    await PRISMA.vaccination.create({
      data: {
        patientId: patient[0].id,
        vaccinationStatusId: vaccinationStatus[1].id,
        disease: 'Inf',
        description: '',
      },
    }),
    await PRISMA.vaccination.create({
      data: {
        patientId: patient[0].id,
        vaccinationStatusId: vaccinationStatus[2].id,
        disease: 'Diphtheria',
        description: 'Test',
      },
    }),
  ];

  const vaccinationRecords = [
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[0].id,
        vaccine: 'Rotavirus',
        lastVaccination: new Date('2022-12-05'),
        nextVaccination: new Date('2022-05-12'),
      },
    }),
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[1].id,
        vaccine: 'Moderna',
        lastVaccination: new Date('2022-12-05'),
        nextVaccination: new Date('2022-05-12'),
      },
    }),
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[1].id,
        vaccine: 'AstraZeneca',
        lastVaccination: new Date('2020-10-23'),
        nextVaccination: new Date('2020-10-23'),
      },
    }),
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[1].id,
        vaccine: 'Pfizer',
        lastVaccination: new Date('2019-02-09'),
        nextVaccination: new Date('2019-02-09'),
      },
    }),
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[2].id,
        vaccine: 'Varicella',
        lastVaccination: new Date('2022-12-05'),
        nextVaccination: new Date('2022-12-05'),
      },
    }),
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[3].id,
        vaccine: 'Measles, Mumps, Rubella, Varicella',
        lastVaccination: new Date('2022-12-05'),
        nextVaccination: new Date('2022-12-05'),
      },
    }),
    await PRISMA.vaccinationRecord.create({
      data: {
        vaccinationId: vaccinations[4].id,
        vaccine: 'Influenza',
        lastVaccination: new Date('2022-12-05'),
        nextVaccination: new Date('2022-12-05'),
      },
    }),
  ];

  const medications = [
    await PRISMA.medication.create({
      data: {
        patientId: patient[0].id,
        name: 'Ambien',
        description: 'test description',
        notes: 'Test Notes\nMore Test Notes',
        type: MedicationType.PRESCRIPTION,
      },
    }),
    await PRISMA.medication.create({
      data: {
        patientId: patient[0].id,
        name: 'HalfLytely',
        description: 'test description',
        notes: 'Test Notes\nMore Test Notes',
        type: MedicationType.PRESCRIPTION,
      },
    }),
    await PRISMA.medication.create({
      data: {
        patientId: patient[0].id,
        name: 'Orencia Clickject',
        description: 'test description',
        notes: 'Test Notes\nMore Test Notes',
        type: MedicationType.PRESCRIPTION,
      },
    }),
    await PRISMA.medication.create({
      data: {
        patientId: patient[0].id,
        name: 'Viagra',
        description: 'test description',
        notes: 'Test Notes\nMore Test Notes',
        type: MedicationType.OTHER_MEDICATION,
      },
    }),
    await PRISMA.medication.create({
      data: {
        patientId: patient[0].id,
        name: 'D3',
        description: 'test description',
        notes: 'Test Notes\nMore Test Notes',
        type: MedicationType.OTHER_MEDICATION,
      },
    }),
  ];

  const medicationRecords = [
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[0].id,
        productName: 'Zolpidem',
        date: new Date('2022-03-15'),
        expiryDate: new Date('2022-04-15'),
        dosage: '400mg',
      },
    }),
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[0].id,
        productName: 'Zolpidem',
        date: new Date('2020-10-23'),
        expiryDate: new Date('2020-11-23'),
        dosage: '400mg',
      },
    }),
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[0].id,
        productName: 'Ambien',
        date: new Date('2019-09-02'),
        expiryDate: new Date('2019-10-02'),
        dosage: '200mg',
      },
    }),
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[0].id,
        productName: 'Ambien',
        date: new Date('2019-02-10'),
        expiryDate: new Date('2019-03-10'),
        dosage: '200mg',
      },
    }),
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[1].id,
        productName: 'Sodium Chloride-Sodium Bicarbo ...',
        date: new Date('2021-12-05'),
        expiryDate: new Date('2022-01-05'),
        dosage: '400mg',
      },
    }),
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[1].id,
        productName: 'Sodium Chloride-Sodium Bicarbo ...',
        date: new Date('2021-01-21'),
        expiryDate: new Date('2021-03-21'),
        dosage: '400mg',
      },
    }),
    await PRISMA.medicationRecord.create({
      data: {
        medicationId: medications[2].id,
        productName: 'Abatacept',
        date: new Date('2021-06-11'),
        expiryDate: new Date('2021-05-11'),
        dosage: '400mg',
      },
    }),
  ];

  console.log(
    client,
    staffType,
    permission,
    systemRoles,
    clientRoles,
    location,
    staff,
    user,
    userClientRoles,
    patient,
    provider,
    appointment,
    patientAddress,
    address,
    familyHistoryMemberType,
    familyHistoryHereditaryRisk,
    familyHistory,
    allergies,
    vaccinationStatus,
    vaccinations,
    vaccinationRecords,
    medications,
    medicationRecords,
  );
};
