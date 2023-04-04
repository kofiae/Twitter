FROM node:16 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

docker build -t saasbase-be . --platform linux/amd64 # make sure the build is for correct platform

docker run -p 8000:8000 -d saasbase-be
