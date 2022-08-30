import { Test, TestingModule } from '@nestjs/testing'
import { CacheInterceptor, Logger } from '@nestjs/common'
import { User } from '@prisma/client'

import { UserFindOneController } from 'src/module/user/controller/find-one.controller'
import { UserGetOneRepository } from 'src/module/user/repository/get-one-repository'
import { MakeMockUser } from 'src/mock/user'
import { UserQueryService } from 'src/module/user/service/query.service'
import { mockCacheInterceptor } from 'test/interceptor'

let controller
const mockUserGetOneRepository = {
  execute: jest.fn(),
}
const mockUserQueryService = {
  execute: jest.fn(),
}

const Sut = (user: User) => {
  const spyGetRepository = jest.spyOn(mockUserGetOneRepository, 'execute').mockResolvedValue(user)
  const spyQuery = jest.spyOn(mockUserQueryService, 'execute').mockReturnValue({
    adminPlayday: true,
    participate: true,
  })
  return { spyGetRepository, spyQuery }
}

describe('UserFindOneController', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFindOneController],
      providers: [UserGetOneRepository, UserQueryService],
    })
      .setLogger(new Logger())
      .overrideInterceptor(CacheInterceptor)
      .useClass(mockCacheInterceptor)
      .overrideProvider(UserGetOneRepository)
      .useValue(mockUserGetOneRepository)
      .overrideProvider(UserQueryService)
      .useValue(mockUserQueryService)
      .compile()

    controller = module.get<UserFindOneController>(UserFindOneController)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Controller should be defined', function () {
    expect(controller).toBeDefined()
  })

  it('Should call UserFindOneController with right param', async function () {
    const email = 'test@gmail.com'
    const playday = 'playday'
    const participant = 'participant'

    const { spyGetRepository, spyQuery } = Sut(MakeMockUser())
  
    await controller.execute(email, playday, participant)
  
    expect(spyGetRepository).toBeCalledWith({ email }, {
      adminPlayday: true,
      participate: true,
    })
    expect(spyQuery).toBeCalledWith(playday, participant)
  })
})
