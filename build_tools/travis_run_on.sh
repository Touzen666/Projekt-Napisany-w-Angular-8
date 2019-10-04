#!/usr/bin/env bash
set -e

bash build_images.sh

if [[ "$TRAVIS_BRANCH" == "master"]] ; then
  if [[ "$TRAVIS_EVENT_TYPE" == "push "]] ; then
    echo "A push to master, time to send these containers away!"
    bash push_images.sh
  fi
fi
