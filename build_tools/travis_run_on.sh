#!/usr/bin/env bash
set -e

export BRANCH_NAME=`"${TRAVIS_BRANCH}" | iconv -t ascii//TRANSLIT | sed -r s/[~\^]+//g | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z`

bash ./build_tools/build_images.sh

if [[ "$TRAVIS_EVENT_TYPE" == "push" ]] ; then
    bash ./build_tools/push_images.sh;
fi

