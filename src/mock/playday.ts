import { Playday } from "@prisma/client"
import { PlaydayWithParticipantsAndUser } from "src/module/playday/model/playday-with-participants-and-user"

export const MakeMockPlayday = (): Playday => ({
  id: 'id',
  adminId: 'adminId',
  date: '10 de julho de 2022, 15h - 14 de agosto de 2022, 19h',
  address_city: 'Nova Lima',
  address_district: 'Alphaville / Lagoa dos Ingleses',
  address_state: 'MG',
  address_street: 'Nova Lima',
  lot1_price: 10.0,
  lot1_vacancy_existent: 10,
  lot1_vacancy_filled: 1,
  lot2_price: null,
  lot2_vacancy_existent: null,
  lot2_vacancy_filled: null,
  lot3_price: null,
  lot3_vacancy_existent: null,
  lot3_vacancy_filled: null,
  lot4_price: null,
  lot4_vacancy_existent: null,
  lot4_vacancy_filled: null,
  lot5_price: null,
  lot5_vacancy_existent: null,
  lot5_vacancy_filled: null,
  convenience_park: ['Churrasqueira', 'jardim'],
  convenience_food: ['Café da manhã', 'Almoço', 'janta'],
  convenience_internet: ['Cobertura total de internet wireless'],
  convenience_sleep: ['Quarto individual', 'Chuveiro'],
  convenience_parking: ['Vagas para 10 carros'],
  convenience_pool: ['Piscina para criança'],
  gallery: [
    'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80',
    'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=368f45b0888aeb0b7b08e3a1084d3ede&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94a1e718d89ca60a6337a6008341ca50&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89719a0d55dd05e2deae4120227e6efc&auto=format&fit=crop&w=1953&q=80',
    'https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c6e5e3aba713b17aa1fe71ab4f0ae5b&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0c8d632e977f94e5d312d9893258f59&auto=format&fit=crop&w=1355&q=80',
  ],
})

export const MakeMockPlaydayWithParticipants = (): PlaydayWithParticipantsAndUser => ({
  id: 'id',
  adminId: 'adminId',
  date: '10 de julho de 2022, 15h - 14 de agosto de 2022, 19h',
  address_city: 'Nova Lima',
  address_district: 'Alphaville / Lagoa dos Ingleses',
  address_state: 'MG',
  address_street: 'Nova Lima',
  lot1_price: 10.0,
  lot1_vacancy_existent: 10,
  lot1_vacancy_filled: 1,
  lot2_price: null,
  lot2_vacancy_existent: null,
  lot2_vacancy_filled: null,
  lot3_price: null,
  lot3_vacancy_existent: null,
  lot3_vacancy_filled: null,
  lot4_price: null,
  lot4_vacancy_existent: null,
  lot4_vacancy_filled: null,
  lot5_price: null,
  lot5_vacancy_existent: null,
  lot5_vacancy_filled: null,
  convenience_park: ['Churrasqueira', 'jardim'],
  convenience_food: ['Café da manhã', 'Almoço', 'janta'],
  convenience_internet: ['Cobertura total de internet wireless'],
  convenience_sleep: ['Quarto individual', 'Chuveiro'],
  convenience_parking: ['Vagas para 10 carros'],
  convenience_pool: ['Piscina para criança'],
  gallery: [
    'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ff92caffcdd63681a35134a6770ed3b&auto=format&fit=crop&w=1951&q=80',
    'https://images.unsplash.com/photo-1522205408450-add114ad53fe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=368f45b0888aeb0b7b08e3a1084d3ede&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94a1e718d89ca60a6337a6008341ca50&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89719a0d55dd05e2deae4120227e6efc&auto=format&fit=crop&w=1953&q=80',
    'https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8c6e5e3aba713b17aa1fe71ab4f0ae5b&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0c8d632e977f94e5d312d9893258f59&auto=format&fit=crop&w=1355&q=80',
  ],
  participants: [
    {
      "id": "d89c1a6d-5173-45a6-9dee-fca42bccb9a6",
      "email": "mayranabrito@gmail.com",
      "userId": "a38ca0b3-3734-4f31-af19-57b61068f4af",
      "playdayId": "6618fa37-5de2-49cb-9d72-e828da3eab1e",
      "status": "pending",
      "user": {
        "id": "c3bacb71-23b9-45b8-b7ba-cdf3f7326e36",
        "name": "Mayrana Brito",
        "email": "mayranabrito@gmail.com",
        "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/grafu-357616.appspot.com/o/avatar-images%2F4679a6cf-ef13-478f-85f6-ad3bec84298f?alt=media&token=103c8ad3-9916-4fcc-a90f-abc5a1e5663f",
        "avatarUuid": "4679a6cf-ef13-478f-85f6-ad3bec84298f",
        "profession": "pintora",
        "age": 28
      }
    },
    {
      "id": "50f98b79-9d89-4c9e-b213-52a73ac1e721",
      "email": "andreytsuzuki@gmail.com",
      "userId": "c3bacb71-23b9-45b8-b7ba-cdf3f7326e36",
      "playdayId": "fcae0492-0e36-49d0-a674-932c547e81d0",
      "status": "confirmed",
      "user": {
        "id": "c3bacb71-23b9-45b8-b7ba-cdf3f7326e36",
        "name": "Andrey Kenji Tsuzuki",
        "email": "andreytsuzuki@gmail.com",
        "avatarUrl": "https://firebasestorage.googleapis.com/v0/b/grafu-357616.appspot.com/o/avatar-images%2F4679a6cf-ef13-478f-85f6-ad3bec84298f?alt=media&token=103c8ad3-9916-4fcc-a90f-abc5a1e5663f",
        "avatarUuid": "4679a6cf-ef13-478f-85f6-ad3bec84298f",
        "profession": "desenvolvedor",
        "age": 30
      }
    }
  ]
})
