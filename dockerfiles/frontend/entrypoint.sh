#!/bin/bash
# Put quickly a default hostname if not available
if [ -z "$HOSTNAME" ]
  export HOSTNAME=`hostname`
  echo "Grabbing a default hostname of ${HOSTNAME}"
fi

sed -i "s/SERVER_NAMES/${HOSTNAME}/g" /etc/nginx/nginx.conf
echo "Starting with a hostname of ${HOSTNAME}"

exec nginx -g 'daemon off;' "$@"
