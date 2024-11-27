#!/bin/bash

set -ex

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
website_dir=website_content

cd "${script_dir}"
echo "USDC on Stellar directory: $script_dir"
cd "${website_dir}"
yarn build
cd ..

rsync -rv --delete ${script_dir}/${website_dir}/build/ root@info.ourworld.tf:/root/hero/www/info/usdc_on_stellar/