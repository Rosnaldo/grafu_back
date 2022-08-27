import { Body, Controller, Logger, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { User } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { UserInsertOneRepository } from '../repositories/insert-one-repository'
import { UserRegisterDto } from '../swagger-dto/register.dto'

@ApiTags('user')
@Controller('user')
export class UserRegisterController {
  private readonly logger = new Logger(UserRegisterController.name)
  constructor(
    private readonly repository: UserInsertOneRepository,
  ) {}

  @Post()
  async execute(
    @Body() body: UserRegisterDto,
  ): Promise<User> {
    return this.repository.execute(body)
  }
}
