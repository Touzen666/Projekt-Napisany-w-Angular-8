#!/usr/bin/env bash
set -e

docker build --target backend -t touzen666/projekt-napisa/backend .
docker build --target frontend -t touzen666/projekt-napisa/frontend .
docker build -t touzen666/projekt-napisa/nginx nginx
docker build -t touzen666/projekt-napisa/mysql mysql
