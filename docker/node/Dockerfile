FROM node:latest AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx:1.19.0
RUN mkdir /app
COPY --from=builder /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf

docker build -t back .

docker run -p 8000:8000 -d back
