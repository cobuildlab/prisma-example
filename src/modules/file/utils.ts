import { FileReadOnly } from '../../shared/file';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const uploadcare = require('uploadcare');

const uploadCareClient = uploadcare(
  process.env.UPLOADCARE_PUBLIC_KEY,
  process.env.UPLOADCARE_SECRET_KEY,
);

export const uploadcareFile = async (fileUuid: string): Promise<FileReadOnly> => {
  return await new Promise<FileReadOnly>((resolve, reject) => {
    uploadCareClient.files.info(fileUuid, (err: Error | null, info: Record<string, string>) => {
      if (err != null) {
        reject(err);
      } else {
        resolve(info as unknown as FileReadOnly);
      }
    });
  });
};
