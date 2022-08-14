import { BadRequestException, Controller, Get, Logger, Param, Query } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { UserGetOneRepository } from './repositories/get-one-repository'
import { UserQueryService } from './services/query.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name)
  constructor(
    private readonly repository: UserGetOneRepository,
    private readonly queryService: UserQueryService
  ) {}

  @Get(':email')
  @ApiQuery({ name: 'playday', required: false, type: 'boolean' })
  @ApiQuery({ name: 'participant', required: false, type: 'boolean' })
  async execute(
    @Param('email') email: string,
    @Query('playday') playday: string,
    @Query('participant') participant: string,
  ): Promise<User> {
    const user = await this.repository.execute(
      { email },
      this.queryService.execute(playday, participant),
    )

    if (_isNil(user)) {
      throw new BadRequestException('User not found')
    }

    return user
  }
}
