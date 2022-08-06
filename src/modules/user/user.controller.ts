import { Controller, Get, Inject, Param } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserGetByIdRepository } from './repository/get-by-id-repository';

@Controller('user')
export class UserController {
  constructor(
    @Inject()
    private readonly repository: UserGetByIdRepository
  ) {}

  @Get(':userId')
  getById(@Param('userId') userId: string): Promise<User> {
    return this.repository.execute(userId);
  }
}
