import { Body, Controller, Post, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { isNil as _isNil } from 'lodash'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'
import { InvitedResetPlaydayCacheService } from './invited-reset-playday-cache.service'

import { InviteEmailDto } from '../../swagger-dto/invite-email.dto'
import { ParticipantCreateUnregisteredUseCase } from '../../use-case/create-unregistered-participant copy'

@ApiTags('participant')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class InviteParticipantByEmailController {
  constructor(
    private readonly createUnregisteredUseCase: ParticipantCreateUnregisteredUseCase,
    private readonly resetPlaydayCache: InvitedResetPlaydayCacheService,
  ) {}
  
  @Post('invite-unregistered')
  async execute(
    @Body() body: InviteEmailDto,
  ): Promise<void> {
    const { playdayId, email } = body
    const invitedParticipant = await this.createUnregisteredUseCase.execute({ playdayId, email })
    await this.resetPlaydayCache.execute(playdayId, invitedParticipant)
  }
}