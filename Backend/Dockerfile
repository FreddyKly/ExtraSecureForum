FROM node:latest
WORKDIR /usr/src/SecureForum/Backend
COPY ./ ./
RUN npm install

EXPOSE 8082

CMD ["npm", "run", "start"]