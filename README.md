# medONE backend

## Set Environment Variables (create .env file)

```
DATABASE_URL=postgresql://<user/pass>@localhost:5432/<dbname>?schema=public
AUTH0_AUDIENCE=https://medonecorp.com
AUTH0_ISSUER_BASE_URL=https://medone-main.us.auth0.com/
DEBUG=true
AWS_REGION=us-east-1
AWS_CLOUDWATCH_ENABLE=true
UPLOADCARE_PUBLIC_KEY=
UPLOADCARE_SECRET_KEY=
PORT=4000
```

## Create db schema and run migrations

```
npx prisma migrate dev
npm run prisma-generate
```

## Create Test Data

```
./node_modules/.bin/ts-node src/cli.ts -d
```

## Run Backend

```
npm run dev
```

## Delete all data

```
./node_modules/.bin/ts-node src/cli.ts -d
```

## Dependencies

Install `postgress` database locally and set `DATABASE_URL` accordingly.
