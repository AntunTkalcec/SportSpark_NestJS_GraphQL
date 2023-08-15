import { BaseEntity } from 'src/types/base.entity';
import { Column, Entity, OneToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user';

@Entity()
@ObjectType()
export class Document extends BaseEntity {
  @Column({ length: 250 })
  @Field()
  imageTitle: string;

  @Column({ type: 'varbinary', length: 'max' })
  @Field(() => String)
  imageData: Buffer;

  @OneToOne(() => User)
  owner: Promise<User>;
}
