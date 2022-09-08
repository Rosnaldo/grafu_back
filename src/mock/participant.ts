import { Participant } from "@prisma/client"
import { ParticipantsWithUser } from "src/module/participant/model/participant-with-user"

export const MakeMockParticipant = (): Participant => ({
  "id": "18cdb298-15d5-4c63-9fe1-8969aedaafb6",
  "email": "tainassantos@gmail.com",
  "userId": "317f8239-2e33-4999-81ab-2e2ab1b3ddc1",
  "playdayId": "6618fa37-5de2-49cb-9d72-e828da3eab1e",
  "status": "confirmed",
})

export const MakeMockParticipantsWithUser = (): ParticipantsWithUser => ({
  "id": "18cdb298-15d5-4c63-9fe1-8969aedaafb6",
  "email": "tainassantos@gmail.com",
  "userId": "317f8239-2e33-4999-81ab-2e2ab1b3ddc1",
  "playdayId": "6618fa37-5de2-49cb-9d72-e828da3eab1e",
  "status": "confirmed",
  "user": {
    id: '',
    name: 'Andrey',
    email: 'andreytsuzuki@gmail.com',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/grafu-357616.appspot.com/o/avatar-images%2Fe1c57558-4783-43c8-a528-76c5e1447aa8?alt=media&token=9b4308d3-b8d0-45e1-81fb-b03979b22d92',
    avatarUuid: '4679a6cf-ef13-478f-85f6-ad3bec84298f',
    profession: null,
    age: null,
  }
})
