FROM oven/bun:1 AS base

WORKDIR /app

COPY package*.json .

RUN bun install

COPY . .

RUN bun run build

CMD bun run preview --host 0.0.0.0
