import { Body, Controller, Logger, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { User } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { UserInsertOneRepository } from '../../repository/insert-one-repository'
import { UserRegisterDto } from '../../swagger-dto/register.dto'
import { PrismaExceptionFilter } from './prisma-exception.filter'

@ApiTags('user')
@UsePipes(ValidationPipe)
@UseFilters(new PrismaExceptionFilter())
@Controller('user')
export class UserRegisterController {
  private readonly logger = new Logger(UserRegisterController.name)
  constructor(
    private readonly repository: UserInsertOneRepository,
  ) {}

  @Post('register')
  async execute(
    @Body() body: UserRegisterDto,
  ): Promise<User> {
    return this.repository.execute(body)
  }
}
