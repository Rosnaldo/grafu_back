import { Test, TestingModule } from '@nestjs/testing'
import { CacheInterceptor, Logger } from '@nestjs/common'
import { Playday } from '@prisma/client'

import { mockCacheInterceptor } from 'test/interceptor'
import { PlaydayController } from 'src/module/playday/find-one.controller'
import { PlaydayGetOneRepository } from 'src/module/playday/repository/get-one-repository'
import { PlaydayQueryService } from 'src/module/playday/service/query.service'
import { MakeMockPlayday } from 'src/mock/playday'

let controller
const mockPlaydayGetOneRepository = {
  execute: jest.fn(),
}
const mockPlaydayQueryService = {
  execute: jest.fn(),
}

const Sut = (playday: Playday) => {
  const spyRepository = jest.spyOn(mockPlaydayGetOneRepository, 'execute').mockResolvedValue(playday)
  const spyQuery = jest.spyOn(mockPlaydayQueryService, 'execute').mockReturnValue({
    participants: true,
  })
  return { spyRepository, spyQuery }
}

describe('PlaydayController', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaydayController],
      providers: [PlaydayGetOneRepository, PlaydayQueryService],
    })
      .setLogger(new Logger())
      .overrideInterceptor(CacheInterceptor)
      .useClass(mockCacheInterceptor)
      .overrideProvider(PlaydayGetOneRepository)
      .useValue(mockPlaydayGetOneRepository)
      .overrideProvider(PlaydayQueryService)
      .useValue(mockPlaydayQueryService)
      .compile()

    controller = module.get<PlaydayController>(PlaydayController)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Controller should be defined', function () {
    expect(controller).toBeDefined()
  })

  it('Should call PlaydayController with right param', async function () {
    const { spyRepository, spyQuery } = Sut(MakeMockPlayday())
    const id = 'id'
    const participant = 'true'
    const participant_user = 'true'

    await controller.execute(id, participant, participant_user)
    expect(spyRepository).toHaveBeenCalledWith(
      { id },
      { participants: true },
    )
    expect(spyQuery).toHaveBeenCalledWith({ participant, participant_user })
  })
})
