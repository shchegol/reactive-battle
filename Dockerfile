FROM node:15-buster

COPY . /project/
WORKDIR /project
RUN npm install
EXPOSE 5000

CMD npm run dev:ssr:start
