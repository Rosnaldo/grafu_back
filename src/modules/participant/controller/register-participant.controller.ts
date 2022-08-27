import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { Participant } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { ParticipantGetOneRepository } from '../repository/get-one-repository'
import { ParticipantRegisteredUseCase } from '../use-case/registered-participant'
import { RegisterDto } from '../swagger-dto/register.dto'

@Controller('participant')
export class RegisterParticipantController {
  constructor(
    private readonly getOneRepository: ParticipantGetOneRepository,
    private readonly registeredUseCase: ParticipantRegisteredUseCase,
  ) {}
  
  @Post('register')
  async execute(
    @Body() body: RegisterDto,
  ): Promise<Participant> {
    const { email, userId } = body;

    const participant = await this.getOneRepository.execute({ email });

    if (_isNil(participant)) {
      throw new BadRequestException('Participant not found')
    }

    return this.registeredUseCase.execute({ participantId: participant.id, userId });
  }
}
