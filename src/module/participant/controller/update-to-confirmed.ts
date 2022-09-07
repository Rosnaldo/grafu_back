import { Body, Controller, Logger, Put, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ParticipantStatus } from '@prisma/client'

import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'
import { ParticipantGetOneRepository } from '../repository/get-one-repository'
import { ResetParticipantCacheService } from '../service/reset-participant-cache.service'
import { UpdateToConfirmedDto } from '../swagger-dto/update-to-confirmed'
import { ParticipantUpdateUseCase } from '../use-case/update-participant'

@ApiTags('participant')
@UsePipes(ValidationPipe)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class ParticipantUpdateToConfirmedController {
  constructor(
    private readonly findRepository: ParticipantGetOneRepository,
    private readonly updateUseCase: ParticipantUpdateUseCase,
    private readonly resetCache: ResetParticipantCacheService,
  ) {}
  
  @Put('confirmed')
  async execute(@Body() body: UpdateToConfirmedDto): Promise<void> {
    let where = {
      id: body.participantId
    }

    if (body.email) {
      const participant = await this.findRepository.execute({
        email: body.email
      })

      where.id = participant.id
    }

    await this.updateUseCase.execute(
      body.playdayId,
      where,
      {
        status: ParticipantStatus.confirmed,
      }
    )
  }
}
