FROM node:18.17.0-buster

WORKDIR /app

COPY package.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY . .

EXPOSE 4200

ENV NODE_OPTIONS="-r esm"

CMD ng serve --host 0.0.0.0

