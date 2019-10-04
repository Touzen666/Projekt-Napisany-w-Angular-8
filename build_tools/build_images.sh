#!/usr/bin/env bash
set -e

docker build --target backend -t touzen666/projekt-napisany-w-angular-8:backend -f dockerfiles/Dockerfile .
docker build --target frontend -t touzen666/projekt-napisany-w-angular-8:frontend -f dockerfiles/Dockerfile .
docker build -t touzen666/projekt-napisany-w-angular-8:mysql dockerfiles/mysql
