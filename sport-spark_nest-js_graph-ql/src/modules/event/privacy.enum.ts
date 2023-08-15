import { registerEnumType } from '@nestjs/graphql';

export enum Privacy {
  Public = 0,
  Friends = 1,
  Selected = 2,
}

registerEnumType(Privacy, { name: 'Privacy' });
