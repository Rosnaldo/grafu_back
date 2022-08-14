import { Controller, Get, Inject, Param } from '@nestjs/common'
import { User } from '@prisma/client'
import { UserGetByEmailRepository } from './repository/get-by-email-repository'

@Controller('user')
export class UserController {
  constructor(
    private readonly repository: UserGetByEmailRepository
  ) {}

  @Get(':email')
  execute(@Param('email') email: string): Promise<User> {
    return this.repository.execute(email)
  }
}
