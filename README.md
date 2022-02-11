# NodeJS (Express) + GraphQL (Apollo Server)

## Language

- Typescript

## Authentication

- jwt

## Database

- MongoDB (mongoose)

## Dev Tools

- Nodemon
- Prettier
- ESLint
- Husky
- Docker

## Folder Structure

    .
    └── src
    |    ├── directives          # Custom GraphQL directives http://spec.graphql.org/draft/#sec-Type-System.Directives
    |    ├── models              # Mongo models
    |    ├── modules             # GraphQL module (include schema and resolvers)
    |    ├── scalars             # Custom GraphQL types http://spec.graphql.org/draft/#sec-Scalars
    |    └── utils               # Shared functions across the project
    └── tests

## Setup Development Env

- Clone the repository
- Make a copy of the `.env.sample` file and rename it to `.env`

### With Docker
- Install [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
- Install [DockerCompose](https://docs.docker.com/compose/install/)
- Run `docker-compose build`
- Run `docker-compose up`

### Without Docker
- Install [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Run `nvm use` to use the correct version of node supported
- Run `yarn install` to install the dependencies
- Install [Mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- Create a new database (without any collection) and set the URI in the .env file i.e. `mongodb://localhost:27017/{database_name}`

## Scripts

### `yarn dev`

Runs the app in development mode.

### `yarn lint`

Launches the lint runner in the interactive watch mode.<br />
Learn more about [ESLint](https://eslint.org/docs/user-guide/getting-started).

### `yarn format`

Launches the format runner in the interactive watch mode.<br />
Learn more about [Prettier](https://prettier.io/).

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
