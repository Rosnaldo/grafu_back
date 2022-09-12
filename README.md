# grafu_back


## Prisma

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
