import { CacheInterceptor, Controller, Get, Param, UseFilters, UseInterceptors } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Participant } from '@prisma/client'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'
import { ParticipantGetAllRepository } from '../repository/get-all-repository'

@ApiTags('participant')
@UseInterceptors(CacheInterceptor)
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('participant')
export class ParticipantFindAllByPlaydayController {
  constructor(
    private readonly repository: ParticipantGetAllRepository,
  ) {}
  
  @Get(':playdayId')
  async execute(@Param('playdayId') playdayId: string): Promise<Participant[]> {
    return this.repository.execute(
    {
      playdayId,
    },
    {
      user: true
    })
  }
}
