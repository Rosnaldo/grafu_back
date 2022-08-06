import { Module } from '@nestjs/common';
import { UserGetByIdRepository } from './repository/get-by-id-repository';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserGetByIdRepository],
})
export class UserModule {}
