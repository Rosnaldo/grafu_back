import { Module } from '@nestjs/common'
import { PrismaService } from 'src/service/prisma.service'
import { PlaydayController } from './find-one.controller'
import { PlaydayGetOneRepository } from './repository/get-one-repository'
import { GetPlaydayCacheService } from './service/cache/get-playday-cache.service'
import { PlaydayQueryService } from './service/query.service'
import { ResetPlaydayCacheService } from './service/cache/reset-playday-cache.service'

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
