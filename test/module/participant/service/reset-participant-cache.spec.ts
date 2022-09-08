import { Test, TestingModule } from '@nestjs/testing'
import { Logger } from '@nestjs/common'

import { ResetParticipantCacheService } from 'src/module/participant/service/reset-participant-cache.service'
import { ResetPlaydayCacheService } from 'src/module/playday/service/cache/reset-playday-cache.service'
import { MakeMockParticipantsWithUser } from 'src/mock/participant'
import { ResetParticipantCheckInviteStatusCacheService } from 'src/module/participant/service/check-invite-status-cache.service'

let resetCache: ResetParticipantCacheService;
const mockResetPlaydayCacheService = {
  byParticipant: jest.fn(),
}

const mockResetParticipantCheckInviteStatusCacheService = {
  execute: jest.fn(),
}

const participant = MakeMockParticipantsWithUser();

const Sut = () => {
  const spyResetparticipantCache = jest.spyOn(mockResetParticipantCheckInviteStatusCacheService, 'execute')
  const spyResetCache = jest.spyOn(mockResetPlaydayCacheService, 'byParticipant')
  
  return { spyResetCache, spyResetparticipantCache }
}

describe('ResetParticipantCacheService', () => {
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResetParticipantCacheService,
        ResetParticipantCheckInviteStatusCacheService,
        ResetPlaydayCacheService,
      ],
    })
      .setLogger(new Logger())
      .overrideProvider(ResetParticipantCheckInviteStatusCacheService)
      .useValue(mockResetParticipantCheckInviteStatusCacheService)
      .overrideProvider(ResetPlaydayCacheService)
      .useValue(mockResetPlaydayCacheService)
      .compile()

    resetCache = module.get<ResetParticipantCacheService>(ResetParticipantCacheService)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Service should be defined', function () {
    expect(resetCache).toBeDefined()
  })

  const mockParticipant = MakeMockParticipantsWithUser()
  const playdayId = 'playdayId'

  it('when playday cache not exist', async function () {
    const { spyResetparticipantCache, spyResetCache } = Sut()

    await resetCache.execute(
      playdayId,
      mockParticipant,
    )

    expect(spyResetparticipantCache).toHaveBeenCalledWith('playdayId', participant)
    expect(spyResetCache).toHaveBeenCalledWith('playdayId', participant)
  })
})
