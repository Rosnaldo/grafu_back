import { Body, Controller, Post, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Participant, ParticipantStatus } from '@prisma/client'

import { isNil as _isNil } from 'lodash'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'

import { InviteEmailDto } from '../swagger-dto/invite-email.dto'
import { ParticipantCreateUnregisteredUseCase } from '../use-case/create-unregistered-participant copy'

@ApiTags('participant')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class InviteParticipantByEmailController {
  constructor(
    private readonly createUnregisteredUseCase: ParticipantCreateUnregisteredUseCase,
  ) {}
  
  @Post('invite')
  async execute(
    @Body() body: InviteEmailDto,
  ): Promise<Participant> {
    const { playdayId, email } = body
    return this.createUnregisteredUseCase.execute({ playdayId, email })
  }
}
