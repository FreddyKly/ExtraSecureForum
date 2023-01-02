FROM node:latest
WORKDIR /usr/src/SecureForum/Backend
COPY ./ ./
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]