#!/usr/bin/env bash
set -e
docker login -u "${DOCKER_USERNAME}" -p "${DOCKER_PASSWORD}"

docker push "touzen666/projekt8/backend:${TRAVIS_BRANCH}"
docker push "touzen666/projekt8/frontend:${TRAVIS_BRANCH}"


