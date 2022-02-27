FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ship--rocket /usr/share/nginx/html

EXPOSE 8081
ENTRYPOINT ["nginx", "-g", "daemon off;"]