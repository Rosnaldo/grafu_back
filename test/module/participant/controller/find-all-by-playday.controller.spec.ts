import { Test, TestingModule } from '@nestjs/testing'
import { CacheInterceptor, Logger } from '@nestjs/common'

import { mockCacheInterceptor } from 'test/interceptor'
import { ParticipantFindAllByPlaydayController } from 'src/module/participant/controller/find-all-by-playday.controller'
import { ParticipantGetAllRepository } from 'src/module/participant/repository/get-all-repository'

let controller
const mockParticipantGetAllRepository = {
  execute: jest.fn(),
}

const Sut = () => {
  const spy = jest.spyOn(mockParticipantGetAllRepository, 'execute').mockResolvedValue([])
  return { spy }
}

describe('ParticipantFindAllByPlaydayController', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipantFindAllByPlaydayController],
      providers: [ParticipantGetAllRepository],
    })
      .setLogger(new Logger())
      .overrideInterceptor(CacheInterceptor)
      .useClass(mockCacheInterceptor)
      .overrideProvider(ParticipantGetAllRepository)
      .useValue(mockParticipantGetAllRepository)
      .compile()

    controller = module.get<ParticipantFindAllByPlaydayController>(ParticipantFindAllByPlaydayController)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Controller should be defined', function () {
    expect(controller).toBeDefined()
  })

  it('Should call PlaydayController with right param', async function () {
    const { spy } = Sut()
    const playdayId = 'playdayId'

    await controller.execute(playdayId)
    expect(spy).toHaveBeenCalledWith(
      {
        playdayId,
      },
      {
        user: true
      }
    )
  })
})
