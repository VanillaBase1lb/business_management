FROM node:17-alpine
WORKDIR /app
COPY package.json /app
RUN npm i --only=production && npm cache clean --force
COPY . /app
CMD node server/server.js
EXPOSE 8080 
