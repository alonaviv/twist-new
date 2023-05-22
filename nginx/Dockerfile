FROM nginx:stable-alpine3.17

RUN rm /etc/nginx/nginx.conf

COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Build react project and copy build folder to nginx
WORKDIR /twist/frontend/

COPY ../frontend .

RUN apk add --update nodejs npm

RUN npm install \
    && npm run build \

RUN chmod -R 755 ./build
RUN mv build/* /usr/share/nginx/html

EXPOSE 80
