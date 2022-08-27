import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'

import { ParticipantFindAllByPlaydayController } from './controller/find-all-by-playday.controller'
import { InviteParticipantByEmailController } from './controller/invite-by-email.controller'
import { RegisterParticipantController } from './controller/register-participant.controller'
import { ParticipantGetAllRepository } from './repository/get-all-repository'
import { ParticipantGetOneRepository } from './repository/get-one-repository'
import { ParticipantInsertOneRepository } from './repository/insert-one-repository'
import { ParticipantUpdateOneRepository } from './repository/update-one-repository'
import { ParticipantCreateUnregisteredUseCase } from './use-case/create-unregistered-participant copy'
import { ParticipantRegisteredUseCase } from './use-case/registered-participant'

@Module({
  imports: [],
  controllers: [
    ParticipantFindAllByPlaydayController,
    InviteParticipantByEmailController,
    RegisterParticipantController,
  ],
  providers: [
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
