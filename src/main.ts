import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './services/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  app.setGlobalPrefix('v1')

  const swagger = new DocumentBuilder()
    .setTitle('grafu-api')
    .setDescription('Grafu api')
    .setVersion('0.0.1')
    .build()
  const document = SwaggerModule.createDocument(app, swagger)
  SwaggerModule.setup('docs', app, document)

  await app.listen(3000);
}
bootstrap();
