# Build stage
LABEL authors="jere"
FROM node:lts-alpine3.19 as build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Production stage
FROM node:lts-alpine3.19 as prod

WORKDIR /app

COPY --from=build /app/package*.json .

RUN npm ci --omit

COPY --from=build /app/build ./build

ENV PORT=8000

EXPOSE 8000

CMD ["npm", "run", "serve"]