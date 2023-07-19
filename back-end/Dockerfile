FROM node:18.16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --force

COPY . .

ENV PORT=3003
ENV NODE_ENV=development
ENV TYPEFORM_TOKEN=process.env.NODE_ENV
ENV PIPEDRIVE_TOKEN=olala
ENV DATABASE_URL=mongodb+srv://gradapp-main-db-0ce122cddb1:Y1mq6u3ESSmrVxjMwEBqWD8CghRxyX@prod-us-central1-2.ih9la.mongodb.net/gradapp-main-db-0ce122cddb1

EXPOSE 3003

CMD ["npm", "start"]

