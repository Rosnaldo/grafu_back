import { Test, TestingModule } from '@nestjs/testing'
import { Logger } from '@nestjs/common'
import { User } from '@prisma/client'

import { MakeMockUser } from 'src/mock/user'
import { UserUpdateAvatarController } from 'src/module/user/controller/update-avatar'
import { UserUpdateOneRepository } from 'src/module/user/repository/update-one-repository'
import { GetUserCacheService } from 'src/module/user/service/cache/get-user-cache.service'

let controller
const mockUserUpdateOneRepository = {
  execute: jest.fn(),
}
const mockGetUserCacheService = {
  execute: jest.fn(),
}

const Sut = (user: User) => {
  const spyUpdateOneRepository = jest.spyOn(mockUserUpdateOneRepository, 'execute').mockResolvedValue(user)
  const spyGetUserCacheService = jest.spyOn(mockGetUserCacheService, 'execute').mockResolvedValue('andreytsuzuki@gmail.com')
  return { spyUpdateOneRepository, spyGetUserCacheService }
}

describe('UserUpdateAvatarController', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserUpdateAvatarController],
      providers: [UserUpdateOneRepository, GetUserCacheService],
    })
      .setLogger(new Logger())
      .overrideProvider(UserUpdateOneRepository)
      .useValue(mockUserUpdateOneRepository)
      .overrideProvider(GetUserCacheService)
      .useValue(mockGetUserCacheService)
      .compile()

    controller = module.get<UserUpdateAvatarController>(UserUpdateAvatarController)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Controller should be defined', function () {
    expect(controller).toBeDefined()
  })

  it('Should call UserUpdateAvatarController with right param', async function () {
    const { spyUpdateOneRepository, spyGetUserCacheService } = Sut(MakeMockUser())
  
    await controller.execute('id', { avatarUrl: 'avatarUrl', avatarUuid: 'avatarUuid' })
  
    expect(spyUpdateOneRepository).toHaveBeenCalledWith(
      { id: 'id' },
      { avatarUrl: 'avatarUrl', avatarUuid: 'avatarUuid' }
    )
    expect(spyGetUserCacheService).toHaveBeenCalledWith('andreytsuzuki@gmail.com')
  })
})
