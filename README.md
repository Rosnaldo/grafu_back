# grafu_back API

## Specifications 
framework: Nestjs Fastify <br>
logger: Datadog <br>
orm: Prisma <br>
bd: Postgress <br>
cache: Redis <br>
host: Heroku <br>

<br>

## Architeture decisitons
• Modular Architeture <br>
• Prisma ORM <br>
• Validations middleware <br>
• Error hadler interceptor (scoped and globally) <br>
• Clean Architeture concepts <br>

<br>

The modular architeture decision prepares to posible future microservice split. <br>
The division layers Controller, UseCases, Services, repositories and Entities are been respected keeping Clean Architeture principles. <br>
Class-validator middleware ensure data input integrity. <br>
Swagger docs are been been generated automatically by annotations. <br>
Prisma helpes updating DB easly with migrations and highly typed queries also entites are generated automatically. <br>
Error are captured and mapped by code, errors that is not expected goes to global interceptor are is captured by Datadog. <br>
<br>

## Prisma

### Update entities
```
prisma format
prisma generate
```

### Seed
```
npx prisma db seed
```

### Migrate
```
npm run migrate:dev-create
npm run migrate:dev
npm run migrate:deploy
```

## Deploy
```
git push heroku main
```

## Heroku Config Datadog Buildpack
https://github.com/DataDog/heroku-buildpack-datadog
Datadog dashboard -> integrations -> heroku
