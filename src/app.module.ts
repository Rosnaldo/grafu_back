import { CacheInterceptor, CacheModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';
import { DatadogTraceModule } from 'nestjs-ddtrace';
import { LoggerModule } from 'nestjs-pino';

import { ParticipantModule } from './module/participant/participant.module'
import { PlaydayModule } from './module/playday/playday.module'
import { UserModule } from './module/user/user.module'

const ONE_WEEK = 60 * 60 * 24 * 7

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.ENV !== 'prod' ? 'trace' : 'info'
      }
    }), 
    DatadogTraceModule.forRoot(),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      auth_pass: process.env.REDIS_PASSWORD,
      tls: { rejectUnauthorized: false },
      ttl: ONE_WEEK,
    }),
    ConfigModule.forRoot(),
    UserModule,
    PlaydayModule,
    ParticipantModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
