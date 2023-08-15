import { Column, Entity, OneToMany } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/types/base.entity';
import { Event } from '../event/event';

@Entity()
@ObjectType()
export class EventRepeatType extends BaseEntity {
  @Column({ length: 250 })
  @Field()
  description: string;

  @OneToMany(() => Event, (event) => event.eventRepeatType)
  @Field(() => [Event])
  events: Promise<Event[]>;
}
