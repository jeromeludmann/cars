FROM node:carbon

WORKDIR /tmp

COPY package*.json /tmp/

RUN npm install

WORKDIR /usr/src/cars/

COPY . /usr/src/cars/

RUN cp -a /tmp/node_modules /usr/src/cars/
