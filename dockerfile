FROM node:12-stretch-slim AS base
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production 
RUN npm install nodemon -g
COPY package.json package.json