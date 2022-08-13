import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'andreytsuzuki@gmail.com',
      name: 'Andrey Tsuzuki',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQFXAsqjqMZjSw/profile-displayphoto-shrink_800_800/0/1598561454891?e=1663200000&v=beta&t=d9HE6iKFhvYYZV2iPLDQIeLfVK2vjuURE1acSOKN2s0',
    }
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'tainassantos@gmail.com',
      name: 'Tainá Santos',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C4D03AQHAKn6G9ZF3hA/profile-displayphoto-shrink_800_800/0/1658359139701?e=1663804800&v=beta&t=Gs9Veyl9gRO3VA1HDJvm18sjG3uHVEahkcGULhTzx7s',
    }
  })

  const playday = await prisma.playday.create({
    data: {
      admin: {
        connect: {
          id: user.id,
        }
      },
      date: '10 de julho de 2022, 15h - 14 de agosto de 2022, 19h',
      address_city: 'Nova Lima',
      address_district: 'Alphaville / Lagoa dos Ingleses',
      address_state: 'MG',
      address_street: 'Nova Lima',
      lot1_price: 10.0,
      lot1_vacancy_existent: 10,
      lot1_vacancy_filled: 1,
      convenience_park: ['Churrasqueira', 'jardim'],
      convenience_food: ['Café da manhã', 'Almoço', 'janta'],
      convenience_internet: ['Cobertura total de internet wireless'],
      convenience_sleep: ['Quarto individual', 'Chuveiro'],
      convenience_parking: ['Vagas para 10 carros'],
      convenience_pool: ['Piscina para criança'],
    },
  })

  await prisma.participant.create({
    data: {
      user: {
        connect: {
          id: user.id,
        }
      },
      playday: {
        connect: {
          id: playday.id
        }
      },
      status: 'confirmed',
    },
  })

  await prisma.participant.create({
    data: {
      user: {
        connect: {
          id: user2.id,
        }
      },
      playday: {
        connect: {
          id: playday.id
        }
      },
      status: 'confirmed',
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
