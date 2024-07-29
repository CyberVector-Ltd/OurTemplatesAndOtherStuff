#!/usr/bin/env bash

#####################################################################################
# Ensures the correct versions of node and npm are used, according to config files. #
#####################################################################################

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git || true
asdf install nodejs

# Install the correct version of npm
EXPECTED_NPM_VERSION=$(cat ${SCRIPT_DIR}/../../.npm-version | tr -d '[:space:]')
ACTUAL_NPM_VERSION=$(npm -v | tr -d '[:space:]')
if [[ $EXPECTED_NPM_VERSION != $ACTUAL_NPM_VERSION ]]; then
  npm install -g npm@$EXPECTED_NPM_VERSION
else
  echo NPM already at $EXPECTED_NPM_VERSION
fi
