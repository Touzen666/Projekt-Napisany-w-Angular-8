#!/usr/bin/env bash
set -e

docker build --target backend -t touzen666/projekt8:backend -f dockerfiles/Dockerfile .
docker build --target frontend -t touzen666/projekt8:frontend -f dockerfiles/Dockerfile .
