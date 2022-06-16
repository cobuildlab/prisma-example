import { Ctx, FieldResolver, Resolver, Root } from 'type-graphql';
import { File } from '../../../prisma/generated/type-graphql';
import { FileReadOnly } from '../../shared/file';
import { GraphqlContext } from '../../index';
import { uploadcareFile } from './utils';

@Resolver((of) => File)
export class CustomFileResolver {
  @FieldResolver((type) => FileReadOnly, { nullable: true })
  async fileMeta(
    @Root() file: File,
    @Ctx() { prisma }: GraphqlContext,
  ): Promise<FileReadOnly | null> {
    console.log('CustomFileResolver', file.meta, file.fileUuId);
    if (file.meta !== null) {
      return file.meta as unknown as FileReadOnly;
    }
    const fileInfo = await uploadcareFile(file.fileUuId);
    console.log('CustomFileResolver:fileInfo:', fileInfo);
    await prisma.file.update({
      where: {
        id: file.id,
      },
      data: {
        meta: JSON.stringify(fileInfo),
      },
    });
    return fileInfo as unknown as FileReadOnly;
  }
}
