import { Body, CACHE_MANAGER, Controller, Inject, Logger, Param, Put, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';
import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter';

import { UserUpdateOneRepository } from '../../repositories/update-one-repository';
import { UpdateAvatarDto } from '../../swagger-dto/update-avatar.dto';

@ApiTags('user')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('user')
export class UserUpdateAvatarController {
  private readonly logger = new Logger(UserUpdateAvatarController.name)
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly repository: UserUpdateOneRepository,
  ) {}

  @Put(':id')
  async execute(
    @Param('id') id: string,
    @Body() body: UpdateAvatarDto,
  ): Promise<void> {
    try {
      await this.repository.execute(
        { id },
        { avatar: body.avatar }
      )
    } catch (err) {
      this.logger.log(err.message)
      this.logger.log(err.code)
    }
  }
}
