#!/usr/bin/env bash
# Zamieszczony tylko w ramach ciekawostki

# Najpierw nalezy utworzyc gdzies wolumin gdzie beda przechowywane dane
docker volume create portainer_data
# to wlasnie montarz gniazdka Dockera jako woluminu daje Portainerowi jego sile
docker run -d --name portainer --restart always -p 9000:9000 -v portainer_data:/data  \
       -v /var/run/docker.sock:/var/run/docker.sock  \
       portainer/portainer
