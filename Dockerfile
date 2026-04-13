FROM node:24-slim AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

FROM node:24-slim
WORKDIR /app
COPY --from=frontend-builder /app/.next/standalone ./build

EXPOSE 3000

CMD ["node", "server.js"]