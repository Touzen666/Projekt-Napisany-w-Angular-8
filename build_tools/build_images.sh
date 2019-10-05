#!/usr/bin/env bash
set -e

docker build --target backend -t "touzen666/projekt8/backend:${TRAVIS_BRANCH}" -f dockerfiles/Dockerfile .
docker build --target frontend -t "touzen666/projekt8/frontend:${TRAVIS_BRANCH}"-f dockerfiles/Dockerfile .
