#!/usr/bin/env bash

# The below tells bash to stop the script if any of the commands fail
set -ex

LAST_PUBLISHED_TAG=$(awk -F\" '/"version":/ {print $4}' ./packages/truffle-conflux/package.json)

git checkout kill_ganancehe
git pull origin kill_ganancehe
yarn bootstrap
prs-merged-since --repo liuis/truffle-conflux --tag v$LAST_PUBLISHED_TAG --format markdown
lerna changed
