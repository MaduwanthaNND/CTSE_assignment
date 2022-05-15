FROM node:18-alpine3.14

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8080

CMD ["node", "server.js"]