import { Test, TestingModule } from '@nestjs/testing'
import { Logger } from '@nestjs/common'

import { ResetParticipantCacheService } from 'src/module/participant/service/reset-participant-cache.service'
import { ResetPlaydayCacheService } from 'src/module/playday/service/cache/reset-playday-cache.service'
import { GetPlaydayCacheService } from 'src/module/playday/service/cache/get-playday-cache.service'
import { MakeMockPlaydayWithParticipants } from 'src/mock/playday'
import { Playday } from '@prisma/client'
import { MakeMockParticipant } from 'src/mock/participant'

let resetCache: ResetParticipantCacheService;
const mockResetPlaydayCacheService = {
  execute: jest.fn(),
}

const mockGetPlaydayCacheService = {
  execute: jest.fn(),
}

const Sut = (playday: Playday | null) => {
  const spyGetPlaydayCache = jest.spyOn(mockGetPlaydayCacheService, 'execute').mockResolvedValue(playday)
  const spyResetCache = jest.spyOn(mockResetPlaydayCacheService, 'execute').mockResolvedValue(playday)
  
  return { spyResetCache, spyGetPlaydayCache }
}

describe('ResetParticipantCacheService', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResetParticipantCacheService,
        ResetPlaydayCacheService,
        GetPlaydayCacheService,
      ],
    })
      .setLogger(new Logger())
      .overrideProvider(ResetPlaydayCacheService)
      .useValue(mockResetPlaydayCacheService)
      .overrideProvider(GetPlaydayCacheService)
      .useValue(mockGetPlaydayCacheService)
      .compile()

    resetCache = module.get<ResetParticipantCacheService>(ResetParticipantCacheService)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Service should be defined', function () {
    expect(resetCache).toBeDefined()
  })

  const mockParticipant = MakeMockParticipant()
  const playdayId = 'playdayId'

  it('when playday cache not exist', async function () {
    const { spyGetPlaydayCache, spyResetCache } = Sut(null)

    await resetCache.execute(
      playdayId,
      mockParticipant,
    )

    expect(spyGetPlaydayCache).toHaveBeenCalledWith(playdayId)
    expect(spyResetCache).not.toHaveBeenCalled()
  })

  it('when playday cache exist and new participant is found should update', async function () {
    const mockPlayday = MakeMockPlaydayWithParticipants()
    mockPlayday.participants.push(mockParticipant)

    const pushSpy = jest.spyOn(mockPlayday.participants, 'push');

    const { spyGetPlaydayCache, spyResetCache } = Sut(mockPlayday)

    await resetCache.execute(
      playdayId,
      mockParticipant
    )

    expect(spyGetPlaydayCache).toHaveBeenCalledWith(playdayId)
    expect(spyResetCache).toHaveBeenCalledWith('playdayId', mockPlayday)
    expect(pushSpy).not.toHaveBeenCalled()
  })

  it('when playday cache exist and new participant is not found should add', async function () {
    const mockPlayday = MakeMockPlaydayWithParticipants()

    const pushSpy = jest.spyOn(mockPlayday.participants, 'push');

    const { spyGetPlaydayCache, spyResetCache } = Sut(mockPlayday)

    await resetCache.execute(
      playdayId,
      mockParticipant
    )

    expect(spyGetPlaydayCache).toHaveBeenCalledWith(playdayId)
    expect(spyResetCache).toHaveBeenCalledWith('playdayId', mockPlayday)
    expect(pushSpy).toHaveBeenCalled()
  })
})
