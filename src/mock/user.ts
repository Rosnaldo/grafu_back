import { User } from "@prisma/client"

export const MakeMockUser = (): User => ({
  id: '',
  name: 'Andrey',
  email: 'andreytsuzuki@gmail.com',
  avatar: 'https://firebasestorage.googleapis.com/v0/b/grafu-357616.appspot.com/o/avatar-images%2Fe1c57558-4783-43c8-a528-76c5e1447aa8?alt=media&token=9b4308d3-b8d0-45e1-81fb-b03979b22d92',
  profession: null,
  age: null,
})
