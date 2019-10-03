#!/usr/bin/env bash
set -e

docker build --target backend -t touzen666/projekt-napisany-w-angular-8/backend .
docker build --target frontend -t touzen666/projekt-napisany-w-angular-8/frontend .
docker build -t touzen666/projekt-napisany-w-angular-8/nginx nginx
docker build -t touzen666/projekt-napisany-w-angular-8/mysql mysql
