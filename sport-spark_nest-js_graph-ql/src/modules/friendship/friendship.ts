import { Column, Entity, ManyToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/types/base.entity';
import { FriendshipStatus } from './status.enum';
import { User } from '../user/user';

@Entity()
@ObjectType()
export class Friendship extends BaseEntity {
  @Column({
    type: 'int',
    enum: FriendshipStatus,
    default: FriendshipStatus.Requested,
  })
  @Field(() => FriendshipStatus)
  status: FriendshipStatus;

  @ManyToOne(() => User, (user) => user.requestedFriendships)
  @Field(() => User)
  sender: Promise<User>;

  @ManyToOne(() => User, (user) => user.receivedFriendships)
  @Field(() => User)
  receiver: Promise<User>;
}
