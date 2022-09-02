import { BadRequestException, Body, CacheInterceptor, Controller, Post, UseFilters, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { isNil as _isNil } from 'lodash'

import { ParticipantGetOneRepository } from '../../repository/get-one-repository'
import { ParticipantRegisteredUseCase } from '../../use-case/registered-participant'
import { RegisterDto } from '../../swagger-dto/register.dto'
import { UserGetOneRepository } from 'src/module/user/repository/get-one-repository'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'
import { ResetParticipantCacheService } from '../../service/reset-participant-cache.service'

@ApiTags('participant')
@UseInterceptors(CacheInterceptor)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class RegisterParticipantController {
  constructor(
    private readonly userGetOneRepository: UserGetOneRepository,
    private readonly participantGetOneRepository: ParticipantGetOneRepository,
    private readonly registeredUseCase: ParticipantRegisteredUseCase,
    private readonly resetCache: ResetParticipantCacheService,
  ) {}
  
  @Post('register')
  async execute(
    @Body() body: RegisterDto,
  ): Promise<void> {
    const { email, playdayId } = body

    const user = await this.userGetOneRepository.execute({ email })
    if (_isNil(user)) {
      throw new BadRequestException('User not found')
    }
  
    const participant = await this.participantGetOneRepository.execute({ email, playdayId })
    if (_isNil(participant)) {
      throw new BadRequestException('Participant not found')
    }

    const registerdParticipant = await this.registeredUseCase.execute({ participantId: participant.id, userId: user.id })
    await this.resetCache.execute(playdayId, registerdParticipant)
  }
}
