import { Prisma } from '@prisma/client'

export type PlaydayWithParticipants = Prisma.PlaydayGetPayload<{
  include: {
    participants: true;
  }
}>
