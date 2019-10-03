#!/bin/bash
# Zamień nazwę hosta na szybko
if [ -z "$HOSTNAME" ]
  export HOSTNAME=`hostname`
  echo "Grabbing a default hostname of ${HOSTNAME}"
fi

sed -i "s/SERVER_NAMES/${HOSTNAME}/g" /etc/nginx/nginx.conf

exec nginx -g 'daemon off;' "$@"
