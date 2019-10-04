#!/usr/bin/env bash
set -e
docker login -u "${DOCKER_USERNAME}" -p "${DOCKER_PASSWORD}"

docker push touzen666/projekt8:backend
docker push touzen666/projekt8:mysql
docker push touzen666/projekt8:frontend


