import { Module } from '@nestjs/common'
import { PrismaService } from 'src/service/prisma.service'

import { PlaydayModule } from '../playday/playday.module'
import { UserModule } from '../user/user.module'
import { ParticipantCheckInviteStatusController } from './controller/check-invite-status.controller'
import { InviteParticipantByEmailController } from './controller/invite-by-email'
import { RegisterParticipantController } from './controller/register-participant'
import { ParticipantUpdateToConfirmedController } from './controller/update-to-confirmed'
import { ParticipantGetAllRepository } from './repository/get-all-repository'
import { ParticipantGetOneRepository } from './repository/get-one-repository'
import { ParticipantInsertOneRepository } from './repository/insert-one-repository'
import { ParticipantUpdateOneRepository } from './repository/update-one-repository'
import { ResetParticipantCheckInviteStatusCacheService } from './service/check-invite-status-cache.service'
import { ResetParticipantCacheService } from './service/reset-participant-cache.service'
import { ParticipantCreateUnregisteredUseCase } from './use-case/create-unregistered-participant copy'
import { ParticipantRegisteredUseCase } from './use-case/registered-participant'
import { ParticipantUpdateUseCase } from './use-case/update-participant'

@Module({
  imports: [UserModule, PlaydayModule],
  controllers: [
    ParticipantCheckInviteStatusController,
    InviteParticipantByEmailController,
    RegisterParticipantController,
    ParticipantUpdateToConfirmedController,
  ],
  providers: [
    ResetParticipantCheckInviteStatusCacheService,
    ResetParticipantCacheService,
    ParticipantUpdateUseCase,
    ParticipantGetOneRepository,
    ParticipantUpdateOneRepository,
    ParticipantInsertOneRepository,
    ParticipantGetAllRepository,
    ParticipantCreateUnregisteredUseCase,
    ParticipantRegisteredUseCase,
    PrismaService,
  ],
})
export class ParticipantModule {}
