import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { ParticipantController } from './participant.controller';
import { ParticipantGetByPlaydayRepository } from './repository/get-by-playday-repository';

@Module({
  imports: [],
  controllers: [ParticipantController],
  providers: [
    ParticipantGetByPlaydayRepository,
    PrismaService,
  ],
})
export class ParticipantModule {}
