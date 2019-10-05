#!/usr/bin/env bash
set -e

docker build --target backend -t "touzen666/projekt8:backend-${BRANCH_NAME}" -f dockerfiles/Dockerfile .
docker build --target frontend -t "touzen666/projekt8:frontend-${BRANCH_NAME}" -f dockerfiles/Dockerfile .
