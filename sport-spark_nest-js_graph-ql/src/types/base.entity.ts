import { Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: true })
  id: number;

  @Field()
  @Column({ nullable: true })
  createdAt: Date;

  @Field()
  @Column({ nullable: true })
  updatedAt: Date;
}
