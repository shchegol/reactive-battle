FROM node:13

COPY ../dist /dist
COPY ../server.js ./
COPY package*.json ./

RUN npm i --production

EXPOSE 4000

CMD ["node", "server.js"]