import { Body, CACHE_MANAGER, Controller, Inject, Param, Put, UseFilters } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';

import { GenerericPrismaExceptionFilter } from 'src/common/filter/gereric-prisma-exception.filter';

import { UserUpdateOneRepository } from '../../repository/update-one-repository';
import { GetUserCacheService } from '../../service/cache/set-user-cache.service';
import { UpdateAvatarDto } from '../../swagger-dto/update-avatar.dto';

@ApiTags('user')
@UseFilters(new GenerericPrismaExceptionFilter())
@Controller('user')
export class UserUpdateAvatarController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly repository: UserUpdateOneRepository,
    private readonly getUserCache: GetUserCacheService,
  ) {}

  @Put(':id')
  async execute(
    @Param('id') id: string,
    @Body() body: UpdateAvatarDto,
  ): Promise<void> {
    const newUser = await this.repository.execute(
      { id },
      { avatar: body.avatar }
    )

    await this.getUserCache.execute(newUser.email);
  }
}
