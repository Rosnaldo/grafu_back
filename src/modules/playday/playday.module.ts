import { Module } from '@nestjs/common';
import { PlaydayController } from './playday.controller';
import { PlaydayGetByIdRepository } from './repository/get-by-id-repository';

@Module({
  imports: [],
  controllers: [PlaydayController],
  providers: [
    PlaydayGetByIdRepository
  ],
})
export class PlaydayModule {}
