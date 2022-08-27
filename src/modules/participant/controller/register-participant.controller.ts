import { BadRequestException, Body, Controller, Logger, Post } from '@nestjs/common'
import { Participant } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { ParticipantGetOneRepository } from '../repository/get-one-repository'
import { ParticipantRegisteredUseCase } from '../use-case/registered-participant'
import { RegisterDto } from '../swagger-dto/register.dto'
import { UserGetOneRepository } from 'src/modules/user/repositories/get-one-repository'

@Controller('participant')
export class RegisterParticipantController {
  private readonly logger = new Logger(RegisterParticipantController.name)
  constructor(
    private readonly userGetOneRepository: UserGetOneRepository,
    private readonly participantGetOneRepository: ParticipantGetOneRepository,
    private readonly registeredUseCase: ParticipantRegisteredUseCase,
  ) {}
  
  @Post('register')
  async execute(
    @Body() body: RegisterDto,
  ): Promise<Participant> {
    const { email } = body

    const user = await this.userGetOneRepository.execute({ email })
    if (_isNil(user)) {
      throw new BadRequestException('User not found')
    }
  
    const participant = await this.participantGetOneRepository.execute({ email })
    if (_isNil(participant)) {
      throw new BadRequestException('Participant not found')
    }

    return this.registeredUseCase.execute({ participantId: participant.id, userId: user.id })
  }
}
