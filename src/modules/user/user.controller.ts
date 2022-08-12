import { Controller, Get, Inject, Param } from '@nestjs/common'
import { User } from '@prisma/client'
import { UserGetByIdRepository } from './repository/get-by-id-repository'

@Controller('user')
export class UserController {
  constructor(
    private readonly repository: UserGetByIdRepository
  ) {}

  @Get(':userId')
  getById(@Param('userId') userId: string): Promise<User> {
    return this.repository.getById(userId)
  }
}
