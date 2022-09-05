import { Controller, Get, Logger, Param, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Participant } from '@prisma/client'

import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'
import { ParticipantGetOneRepository } from '../repository/get-one-repository'

@ApiTags('participant')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class ParticipantFindOneController {
  private readonly logger = new Logger(ParticipantFindOneController.name)
  constructor(
    private readonly findRepository: ParticipantGetOneRepository,
  ) {}
  
  @Get('find-one/:email')
  async execute(@Param('email') email: string): Promise<Participant | 'null'> {
    const participant = await this.findRepository.execute({
      email
    })

    if (participant == null) {
      return 'null'
    }

    return participant
  }
}
