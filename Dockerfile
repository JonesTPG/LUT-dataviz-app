FROM node:12 as react-build

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build



FROM nginx:alpine

# Copy built react app source code to nginx document root
COPY --from=react-build /app/build /usr/share/nginx/html

# Copy custom nginx configuration file to container
COPY ./default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]