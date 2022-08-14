import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { PlaydayController } from './playday.controller'
import { PlaydayGetOneRepository } from './repository/get-one-repository'
import { PlaydayQueryService } from './services/query.service'

@Module({
  imports: [],
  controllers: [PlaydayController],
  providers: [
    PlaydayGetOneRepository,
    PrismaService,
    PlaydayQueryService,
  ],
})
export class PlaydayModule {}
