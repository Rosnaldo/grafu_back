import { Controller, Get } from '@nestjs/common';
import User from 'src/entities/user';

@Controller('user')
export class UserController {
  @Get()
  getById(): User {
    return {
      name: 'Andrey',
      email: 'andreytsuzuki@gmail.com',
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQFXAsqjqMZjSw/profile-displayphoto-shrink_800_800/0/1598561454891?e=1663200000&v=beta&t=d9HE6iKFhvYYZV2iPLDQIeLfVK2vjuURE1acSOKN2s0'
    }
  }
}
