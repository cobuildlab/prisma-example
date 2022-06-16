import { Args, ArgsType, Authorized, Ctx, Field, ObjectType, Query, Resolver } from 'type-graphql';
import { PATIENT_INDEX, PATIENT_INDEX_WITH_HINT, PATIENT_INDEX_WITH_LEXEME } from './queries';
import { is } from '../../shared/utils';
import { GraphqlContext } from '../../index';

@ArgsType()
class PatientIndexArgs {
  @Field({ nullable: true })
  hint?: string;

  @Field({ nullable: true })
  lexeme?: string;
}

@ObjectType({ description: 'Patient Index model to return the amount of patients per letter' })
class PatientIndex {
  @Field({ nullable: true })
  letter: string;

  @Field()
  count: number;
}

@Resolver()
export class CustomPatientResolver {
  @Authorized()
  @Query((returns) => [PatientIndex])
  async patientIndex(
    @Args() patientIndexArgs: PatientIndexArgs,
    @Ctx() { prisma }: GraphqlContext,
  ): Promise<[PatientIndex]> {
    console.log('patientIndex:', patientIndexArgs);
    if (is(patientIndexArgs.hint) && is(patientIndexArgs.lexeme)) {
      throw new Error("You can't provide both 'hint' and 'lexeme'");
    }
    if (patientIndexArgs.hint !== undefined && patientIndexArgs.hint !== null) {
      return (await prisma.$queryRaw(PATIENT_INDEX_WITH_HINT(patientIndexArgs.hint))) as [
        PatientIndex,
      ];
    }

    if (patientIndexArgs.lexeme !== undefined && patientIndexArgs.lexeme !== null) {
      return (await prisma.$queryRaw(PATIENT_INDEX_WITH_LEXEME(patientIndexArgs.lexeme))) as [
        PatientIndex,
      ];
    }

    return (await prisma.$queryRaw(PATIENT_INDEX())) as [PatientIndex];
  }
}
