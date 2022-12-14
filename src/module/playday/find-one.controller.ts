import { BadRequestException, CacheInterceptor, Controller, Get, Param, Query, UseFilters, UseInterceptors } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'
import { Playday } from '@prisma/client'

import { isNil as _isNil } from 'lodash'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'

import { PlaydayGetOneRepository } from './repository/get-one-repository'
import { PlaydayQueryService } from './service/query.service'

@ApiTags('playday')
@UseInterceptors(CacheInterceptor)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('playday')
export class PlaydayController {
  constructor(
    private readonly repository: PlaydayGetOneRepository,
    private readonly queryService: PlaydayQueryService
  ) {}
  
  @Get(':id')
  @ApiQuery({ name: 'participant', required: false, type: 'boolean' })
  @ApiQuery({ name: 'participant_user', required: false, type: 'boolean' })
  async execute(
    @Param('id') id: string,
    @Query('participant') participant: string,
    @Query('participant_user') participant_user: string,
  ): Promise<Playday> {
    const playday = await this.repository.execute(
      { id },
      this.queryService.execute({ participant, participant_user }),
    )

    if (_isNil(playday)) {
      throw new BadRequestException('Playday not found')
    }

    return playday
  }
}
