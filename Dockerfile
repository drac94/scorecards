FROM node:16.13.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

RUN yarn install --silent

CMD ["yarn", "dev"]
