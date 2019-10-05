#!/usr/bin/env bash
set -e

if [ -n "${TRAVIS_BRANCH}" ]
then
  echo "Picking Travis branch"
  BRANCH_NAME="${TRAVIS_BRANCH}"
else
  echo "Picking git branch"
  BRANCH_NAME=`git branch | grep \* | cut -d ' ' -f2`
fi

export BRANCH_NAME=`echo ${BRANCH_NAME} | iconv -t ascii//TRANSLIT | sed -r s/[~\^]+//g | sed -r s/[^a-zA-Z0-9]+/-/g | sed -r s/^-+\|-+$//g | tr A-Z a-z`
echo "Fully encoded slug for this branch is ${BRANCH_NAME}"
bash ./build_tools/build_images.sh

if [[ "${TRAVIS_EVENT_TYPE}" == "push" ]]
then
  if [[ "${TRAVIS_PULL_REQUEST}" == "false" ]]
  then
    if [ -z "${TRAVIS_TAG}" ]; then
      bash ./build_tools/push_images.sh;
    fi
  fi
fi
