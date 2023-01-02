FROM node:latest
WORKDIR /usr/src/SecureForum/Frontend
COPY ./ ./
RUN npm install

EXPOSE 8081

CMD ["npm", "run", "serve"]