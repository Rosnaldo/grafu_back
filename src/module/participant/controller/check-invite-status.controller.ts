import { CacheInterceptor, Controller, Get, Logger, Param, UseFilters, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ParticipantStatus } from '@prisma/client'

import { isNil as _isNil } from 'lodash'

import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'
import { ParticipantGetOneRepository } from '../repository/get-one-repository'

@ApiTags('participant')
@UseInterceptors(CacheInterceptor)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class ParticipantCheckInviteStatusController {
  private readonly logger = new Logger(ParticipantCheckInviteStatusController.name)
  constructor(
    private readonly findRepository: ParticipantGetOneRepository,
  ) {}
  
  @Get('check-invite-status/:playdayId/:email')
  async execute(
    @Param('playdayId') playdayId: string,
    @Param('email') email: string,
  ): Promise<ParticipantStatus | 'null'> {
    const participant = await this.findRepository.execute({ email, playdayId })
    if (_isNil(participant)) {
      return 'null'
    }

    return participant.status
  }
}
