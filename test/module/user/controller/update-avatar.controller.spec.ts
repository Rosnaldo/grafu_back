import { Test, TestingModule } from '@nestjs/testing'
import { Logger } from '@nestjs/common'

import { UserUpdateAvatarController } from 'src/module/user/controller/update-avatar'
import { UserUpdateUseCase } from 'src/module/user/use-case/update-user'

let controller
const mockUserUpdateUseCase = {
  execute: jest.fn(),
}

const Sut = () => {
  const spy = jest.spyOn(mockUserUpdateUseCase, 'execute')
  return { spy }
}

describe('UserUpdateAvatarController', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserUpdateAvatarController],
      providers: [UserUpdateUseCase],
    })
      .setLogger(new Logger())
      .overrideProvider(UserUpdateUseCase)
      .useValue(mockUserUpdateUseCase)
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
    const { spy } = Sut()
  
    await controller.execute('id', { avatarUrl: 'avatarUrl', avatarUuid: 'avatarUuid' })
  
    expect(spy).toHaveBeenCalledWith(
      '26bdf87b-4917-4d59-87ad-3fa1dd6ce6a8',
      { id: 'id' },
      { avatarUrl: 'avatarUrl', avatarUuid: 'avatarUuid' }
    )
  })
})
