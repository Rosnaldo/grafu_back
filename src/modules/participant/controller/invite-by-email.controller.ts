import { Body, Controller, Post } from '@nestjs/common'
import { Participant, ParticipantStatus } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { InviteEmailDto } from '../swagger-dto/invite-email.dto'
import { ParticipantCreateUnregisteredUseCase } from '../use-case/create-unregistered-participant copy';

@Controller('participant')
export class InviteParticipantByEmailController {
  constructor(
    private readonly insertOneRepository: ParticipantCreateUnregisteredUseCase,
  ) {}
  
  @Post('invite')
  async execute(
    @Body() body: InviteEmailDto,
  ): Promise<Participant> {
    const { playdayId, email } = body;
    return this.insertOneRepository.execute({ playdayId, email })
  }
}
