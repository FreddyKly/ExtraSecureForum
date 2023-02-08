FROM node:latest
WORKDIR /usr/src/SecureForum/Frontend
COPY ./ ./
RUN npm install

EXPOSE 8083

CMD ["npm", "run", "serve"]