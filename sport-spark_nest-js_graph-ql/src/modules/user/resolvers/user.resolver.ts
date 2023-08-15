import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuardJwtGql } from 'src/modules/auth/strategies-guards/auth-guard-jwt.gql';
import { CurrentUser } from 'src/modules/auth/decorators/currentUser.decorator';
import { CreateUserDto } from '../DTOs/input/create.user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(AuthGuardJwtGql)
  public async me(@CurrentUser() user: User): Promise<User> {
    return user;
  }

  @Mutation(() => User, { name: 'userAdd' })
  public async add(@Args('input') input: CreateUserDto) {
    return await this.userService.create(input); //
  }
}
