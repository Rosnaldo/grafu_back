import { Module } from '@nestjs/common'
import { PrismaService } from 'src/services/prisma.service'
import { PlaydayController } from './playday.controller'
import { PlaydayGetOneRepository } from './repository/get-one-repository'
import { GetPlaydayCacheService } from './services/cache/get-playday-cache.service'
import { PlaydayQueryService } from './services/query.service'
import { ResetPlaydayCacheService } from './services/cache/reset-playday-cache.service'

@Module({
  imports: [],
  controllers: [PlaydayController],
  providers: [
    PlaydayGetOneRepository,
    PrismaService,
    PlaydayQueryService,
    ResetPlaydayCacheService,
    GetPlaydayCacheService,
  ],
  exports: [ResetPlaydayCacheService, GetPlaydayCacheService]
})
export class PlaydayModule {}
