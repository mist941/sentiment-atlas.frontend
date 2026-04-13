FROM node:24-slim AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:24-slim
WORKDIR /app
COPY --from=frontend-builder /app/.next/standalone ./app

EXPOSE 3000

CMD ["node", "server.js"]