import { Module } from '@nestjs/common';
import { ParticipantController } from './participant.controller';
import { ParticipantGetByPlaydayRepository } from './repository/get-by-playday-repository';

@Module({
  imports: [],
  controllers: [ParticipantController],
  providers: [
    ParticipantGetByPlaydayRepository
  ],
})
export class PlaydayModule {}
