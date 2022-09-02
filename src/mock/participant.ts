import { Participant } from "@prisma/client"

export const MakeMockParticipant = (): Participant => ({
  "id": "18cdb298-15d5-4c63-9fe1-8969aedaafb6",
  "email": "tainassantos@gmail.com",
  "userId": "317f8239-2e33-4999-81ab-2e2ab1b3ddc1",
  "playdayId": "6618fa37-5de2-49cb-9d72-e828da3eab1e",
  "status": "confirmed",
})
