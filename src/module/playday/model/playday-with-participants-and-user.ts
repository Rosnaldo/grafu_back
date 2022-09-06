import { Prisma } from '@prisma/client'

export type PlaydayWithParticipantsAndUser = Prisma.PlaydayGetPayload<{
  include: {
    participants: {
      include: {
        user: true
      }
    };
  }
}>
