import './tracting';

import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { Logger as PinoLogger } from 'nestjs-pino';
import { AppModule } from './app.module'
import { AllExceptionsFilter } from './common/filter/all-exceptions-filter'
import { HttpExceptionFilter } from './common/filter/http-exception.filter'
import { PrismaService } from './service/prisma.service'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { bufferLogs: true }
  )
  app.useLogger(app.get(PinoLogger));

  app.enableCors({ origin: true })
  app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter())

  const config = app.get<ConfigService>(ConfigService)

  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  app.setGlobalPrefix('v1')

  const swagger = new DocumentBuilder()
    .setTitle('grafu-api')
    .setDescription('Grafu api')
    .setVersion('0.0.1')
    .build()
  const document = SwaggerModule.createDocument(app, swagger)
  SwaggerModule.setup('docs', app, document)

  const port = config.get('PORT')
  await app.listen(port, '0.0.0.0')

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
