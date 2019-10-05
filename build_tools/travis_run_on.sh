#!/usr/bin/env bash
set -e

bash ./build_tools/build_images.sh

if [[ "$TRAVIS_EVENT_TYPE" == "push" ]] ; then
    bash ./build_tools/push_images.sh;
fi

