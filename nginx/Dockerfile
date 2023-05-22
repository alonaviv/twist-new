# Building the react build dir, and then only copying that to the nginx
# container (without all the frontend src file).
FROM node:12.21.0-alpine3.12 as build

WORKDIR /twist/frontend/

COPY ../frontend/package*.json .

RUN npm install

COPY ../frontend/ .

RUN npm run build

FROM nginx:stable-alpine3.17

COPY --from=build /twist/frontend/build /usr/share/nginx/html

RUN rm /etc/nginx/nginx.conf

COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
