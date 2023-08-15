import { Column, Entity, ManyToOne } from 'typeorm';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../types/base.entity';
import { User } from '../user/user';
import { Privacy } from './privacy.enum';
import { EventType } from '../eventType/eventType';
import { EventRepeatType } from '../eventRepeatType/eventRepeatType';

@Entity()
@ObjectType()
export class Event extends BaseEntity {
  @Column({ length: 50 })
  @Field()
  title: string;

  @Column({ length: 150 })
  @Field()
  description: string;

  @Column({ type: 'decimal', precision: 8, scale: 6, nullable: true })
  @Field(() => Float)
  lat: number;

  @Column({ type: 'decimal', precision: 8, scale: 6, nullable: true })
  @Field(() => Float)
  long: number;

  @Column({ nullable: true })
  @Field()
  time: Date;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float)
  duration: number;

  @Column({ type: 'float', nullable: true })
  @Field(() => Float)
  price: number;

  @Column({ nullable: true })
  @Field(() => Int)
  numberOfParticipants: number;

  @Column({ type: 'int', enum: Privacy, default: Privacy.Public })
  @Field(() => Privacy)
  privacy: Privacy;

  @Column({ default: true })
  @Field(() => Int)
  active: boolean;

  @Column({ nullable: true })
  @Field()
  validUserIds: string;

  @ManyToOne(() => User, (user) => user.events)
  @Field(() => User)
  user: Promise<User>;

  @ManyToOne(() => EventType, (eventType) => eventType.events)
  @Field(() => EventType)
  eventType: Promise<EventType>;

  @ManyToOne(() => EventRepeatType, (eventRepeatType) => eventRepeatType.events)
  @Field(() => EventRepeatType)
  eventRepeatType: Promise<EventRepeatType>;
}
