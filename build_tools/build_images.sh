#!/usr/bin/env bash
set -e

docker build --target backend -t touzen666/projekt8:backend -f dockerfiles/Dockerfile .
docker build --target frontend -t touzen666/projekt8:frontend -f dockerfiles/Dockerfile .
docker build -t touzen666/projekt8:mysql dockerfiles/mysql

bash build_tools/push_images.sh
