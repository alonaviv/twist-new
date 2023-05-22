#!/bin/bash

cd /home/alonav/twist-new

git pull

docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
