import { registerEnumType } from '@nestjs/graphql';

export enum FriendshipStatus {
  Requested = 0,
  Confirmed = 1,
  Denied = 2,
}

registerEnumType(FriendshipStatus, { name: 'FriendshipStatus' });
