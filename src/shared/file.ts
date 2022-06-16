import { Field, GraphQLISODateTime, Int, ObjectType } from 'type-graphql';

@ObjectType('ImageInfo', {
  isAbstract: true,
})
export class ImageInfo {
  @Field((_type) => Int, {
    nullable: true,
  })
  height: number;

  @Field((_type) => Int, {
    nullable: true,
  })
  width: number;
}

@ObjectType('FileReadOnly', {
  isAbstract: true,
})
export class FileReadOnly {
  @Field((_type) => GraphQLISODateTime, {
    nullable: true,
  })
  datetime_removed: Date | undefined;

  @Field((_type) => GraphQLISODateTime, {
    nullable: true,
  })
  datetime_uploaded: Date | undefined;

  @Field((_type) => ImageInfo, {
    nullable: false,
  })
  image_info: ImageInfo;

  @Field()
  is_image: boolean;

  @Field((_type) => String, {
    nullable: false,
  })
  mime_type: string;

  @Field((_type) => String, {
    nullable: false,
  })
  original_file_url: string;

  @Field((_type) => String, {
    nullable: false,
  })
  original_filename: string;

  @Field((_type) => String, {
    nullable: false,
  })
  url: string;
}
