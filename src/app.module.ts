import { Module } from '@nestjs/common';
import { PlaydayModule } from './modules/playday/playday.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    PlaydayModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
