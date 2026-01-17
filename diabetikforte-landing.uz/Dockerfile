# 1-qadam: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# 2-qadam: Serve (Yengil Nginx)
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
RUN sed -i 's/index  index.html index.htm;/index  index.html index.htm; try_files $uri $uri.html $uri\/ =404;/g' /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
