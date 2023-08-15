import { Column, Entity, OneToMany } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/types/base.entity';
import { Event } from '../event/event';

@Entity()
@ObjectType()
export class EventType extends BaseEntity {
  @Column({ length: 50 })
  @Field()
  name: string;

  @Column({ length: 150 })
  @Field()
  description: string;

  @OneToMany(() => Event, (events) => events.eventType)
  @Field(() => [Event])
  events: Promise<Event[]>;
}
