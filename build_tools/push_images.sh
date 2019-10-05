#!/usr/bin/env bash
set -e
docker login -u "${DOCKER_USERNAME}" -p "${DOCKER_PASSWORD}"

docker push "touzen666/projekt8:backend-${BRANCH_NAME}"
docker push "touzen666/projekt8:frontend-${BRANCH_NAME}"


