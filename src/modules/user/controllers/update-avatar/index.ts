import { Body, Controller, Logger, Param, Put, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter'

import { UserUpdateOneRepository } from '../../repositories/update-one-repository'
import { UpdateAvatarDto } from '../../swagger-dto/update-avatar.dto'

@ApiTags('user')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('user')
export class UserUpdateAvatarController {
  private readonly logger = new Logger(UserUpdateAvatarController.name)
  constructor(
    private readonly repository: UserUpdateOneRepository,
  ) {}

  @Put(':id')
  async execute(
    @Param('id') id: string,
    @Body() body: UpdateAvatarDto,
  ): Promise<void> {
    await this.repository.execute(
      { id },
      { avatar: body.avatar }
    )
  }
}
