import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { IsRepeated } from 'src/validation/is-repeated.constraint';

@InputType('UserAddInput')
export class CreateUserDto {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  @IsRepeated('password')
  retypedPassword: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;
}
