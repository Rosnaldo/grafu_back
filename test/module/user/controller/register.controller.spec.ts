import { Test, TestingModule } from '@nestjs/testing'
import { Logger } from '@nestjs/common'
import { User } from '@prisma/client'

import { MakeMockUser } from 'src/mock/user'
import { UserRegisterController } from 'src/module/user/controller/register.controller'
import { UserInsertOneRepository } from 'src/module/user/repository/insert-one-repository'

let controller
const mockUserInsertOneRepository = {
  execute: jest.fn(),
}

const Sut = (user: User) => {
  const spy = jest.spyOn(mockUserInsertOneRepository, 'execute').mockResolvedValue(user)
  return { spy }
}

describe('UserRegisterController', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRegisterController],
      providers: [UserInsertOneRepository],
    })
      .setLogger(new Logger())
      .overrideProvider(UserInsertOneRepository)
      .useValue(mockUserInsertOneRepository)
      .compile()

    controller = module.get<UserRegisterController>(UserRegisterController)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Controller should be defined', function () {
    expect(controller).toBeDefined()
  })

  it('Should call UserUpdateAvatarController with right param', async function () {
    const { spy } = Sut(MakeMockUser())

    const body = {
      email: 'email',
      name: 'name',
      avatarUrl: 'avatarUrl',
      avatarUuid: 'avatarUuid',
      age: 2,
      profession: 'profession',
    }
    await controller.execute(body)
    expect(spy).toHaveBeenCalledWith(body)
  })
})
