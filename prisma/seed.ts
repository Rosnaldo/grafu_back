import { ParticipantStatus, PrismaClient } from '@prisma/client'
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

  const user3 = await prisma.user.create({
    data: {
      email: 'mayranabrito@gmail.com',
      name: 'Mayrana Brito',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQG3j392gmNRfQ/profile-displayphoto-shrink_800_800/0/1622327303559?e=1665014400&v=beta&t=3sy3EDBNl507QBSEALd1BMbVBsEReWuyPS2VqBixo64',
    }
  })

  const user4 = await prisma.user.create({
    data: {
      email: 'luizroberto@gmail.com',
      name: 'Luiz Roberto Fava',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C4D03AQFszy6cgvKZFg/profile-displayphoto-shrink_800_800/0/1653030063690?e=1664409600&v=beta&t=CsntU7adzK0R22Sk22hut67qIw9YODPjz8THD_Q1cpU',
    }
  })

  const user5 = await prisma.user.create({
    data: {
      email: 'marianogomide@gmail.com',
      name: 'Mariano Gomide',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C4D03AQFvf2kCA75r_g/profile-displayphoto-shrink_800_800/0/1602959726513?e=1664409600&v=beta&t=WwDBjj-SojHVPKP8Aed1BVaIQOHVO9VhW81T1foOqAU',
    }
  })

  const user6 = await prisma.user.create({
    data: {
      email: 'stefanievoss@gmail.com',
      name: 'Stefanie Voss',
      avatar:
          'https://media-exp1.licdn.com/dms/image/C4D03AQHIFwJXNpJT6g/profile-displayphoto-shrink_800_800/0/1644233369004?e=1664409600&v=beta&t=-a7PwyulQuCeyQJwL8zjQLEOEW66AfzRla1LsjAhyBw',
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
      email: user.email,
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
      status: ParticipantStatus.confirmed,
    },
  })

  await prisma.participant.create({
    data: {
      email: user2.email,
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
      status: ParticipantStatus.confirmed,
    },
  })

  await prisma.participant.create({
    data: {
      email: user3.email,
      user: {
        connect: {
          id: user3.id,
        }
      },
      playday: {
        connect: {
          id: playday.id
        }
      },
      status: ParticipantStatus.pending,
    },
  })

  await prisma.participant.create({
    data: {
      email: user.email,
      user: {
        connect: {
          id: user4.id,
        }
      },
      playday: {
        connect: {
          id: playday.id
        }
      },
      status: ParticipantStatus.pending,
    },
  })

  await prisma.participant.create({
    data: {
      email: user5.email,
      user: {
        connect: {
          id: user5.id,
        }
      },
      playday: {
        connect: {
          id: playday.id
        }
      },
      status: ParticipantStatus.pending,
    },
  })

  await prisma.participant.create({
    data: {
      email: user6.email,
      user: {
        connect: {
          id: user6.id,
        }
      },
      playday: {
        connect: {
          id: playday.id
        }
      },
      status: ParticipantStatus.pending,
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
