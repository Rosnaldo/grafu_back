import { Prisma } from '@prisma/client'

export type ParticipantsWithUser = Prisma.ParticipantGetPayload<{
  include: {
    user: true
  }
}>
