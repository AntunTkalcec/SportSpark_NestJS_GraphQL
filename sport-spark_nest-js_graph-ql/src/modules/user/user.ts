import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../types/base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Document } from '../document/document';
import { Event } from '../event/event';
import { Friendship } from '../friendship/friendship';

@Entity()
@ObjectType()
export class User extends BaseEntity {
  constructor(partial?: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @Column({ length: 50 })
  @Field()
  username: string;

  @Column({ length: 150 })
  @Field()
  password: string;

  @Column({ length: 50 })
  @Field()
  firstName: string;

  @Column({ length: 50 })
  @Field()
  lastName: string;

  @Column({ length: 50 })
  @Field()
  email: string;

  @Column({ length: 500, nullable: true })
  @Field()
  bio: string;

  @Column({ type: 'decimal', precision: 9, scale: 6, nullable: true })
  @Field()
  rating: number;

  @Column({ nullable: true })
  @Field()
  voteCount: number;

  @Column({ nullable: true })
  @Field()
  voteSum: number;

  @Column({ nullable: true })
  @Field()
  age: number;

  @Column({ nullable: true })
  @Field()
  desiredRadius: number;

  @OneToOne(() => Document)
  @JoinColumn()
  @Field(() => Document)
  profileImage: Promise<Document>;

  @OneToMany(() => Event, (event) => event.user, { cascade: true })
  @Field(() => [Event])
  events: Promise<Event[]>;

  @OneToMany(() => Friendship, (friendship) => friendship.sender)
  @Field(() => [Friendship])
  requestedFriendships: Promise<Friendship[]>;

  @OneToMany(() => Friendship, (friendship) => friendship.receiver)
  @Field(() => [Friendship])
  receivedFriendships: Promise<Friendship[]>;
}
