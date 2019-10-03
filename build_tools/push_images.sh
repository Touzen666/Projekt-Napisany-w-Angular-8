#!/usr/bin/env bash
set -e
docker login -u "${DOCKER_USERNAME}" -p "${DOCKER_PASSWORD}"
docker push touzen666/projekt-napisany-w-angular-8/frontend
docker push touzen666/projekt-napisany-w-angular-8/backend
docker push touzen666/projekt-napisany-w-angular-8/mysql
docker push touzen666/projekt-napisany-w-angular-8/nginx


