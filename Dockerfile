FROM node:17-alpine
WORKDIR /app
COPY package*.json /app
RUN npm i --only=production && npm cache clean --force
COPY . /app
EXPOSE 8080 
CMD [ "node", "server/server.js" ]
