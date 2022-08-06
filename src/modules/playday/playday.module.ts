import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PlaydayController } from './playday.controller';
import { PlaydayGetByIdRepository } from './repository/get-by-id-repository';

@Module({
  imports: [],
  controllers: [PlaydayController],
  providers: [
    PlaydayGetByIdRepository,
    PrismaService,
  ],
})
export class PlaydayModule {}
