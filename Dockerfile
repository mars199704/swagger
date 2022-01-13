FROM node:12.22

WORKDIR /swagger

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]