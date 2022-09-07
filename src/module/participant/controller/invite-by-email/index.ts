import { Body, Controller, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { isNil as _isNil } from 'lodash'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'

import { InviteEmailDto } from '../../swagger-dto/invite-email.dto'
import { ParticipantCreateUnregisteredUseCase } from '../../use-case/create-unregistered-participant copy'
import { ResetParticipantCacheService } from '../../service/reset-participant-cache.service'

@ApiTags('participant')
@UsePipes(ValidationPipe)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class InviteParticipantByEmailController {
  constructor(
    private readonly createUnregisteredUseCase: ParticipantCreateUnregisteredUseCase,
    private readonly resetCache: ResetParticipantCacheService,
  ) {}
  
  @Post('invite-unregistered')
  async execute(
    @Body() body: InviteEmailDto,
  ): Promise<void> {
    const { playdayId, email } = body
    const invitedParticipant = await this.createUnregisteredUseCase.execute({ playdayId, email })
    await this.resetCache.execute(playdayId, invitedParticipant)
  }
}
