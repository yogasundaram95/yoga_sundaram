#!/usr/bin/env bash
# Build the site and publish the output to the repo root, which GitHub Pages
# serves. The root index.html is a BUILD OUTPUT; edit index.source.html instead.
#   bash scripts/publish-pages.sh   then commit and push.
set -euo pipefail
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
tar --exclude=.git --exclude=node_modules --exclude=./assets --exclude=./dist -cf - . | tar -xf - -C "$tmp"
ln -s "$PWD/node_modules" "$tmp/node_modules"
cp index.source.html "$tmp/index.html"
(cd "$tmp" && npx vite build --outDir dist)
rm -rf assets
cp -R "$tmp/dist/." .
echo "Published build to repo root. Commit and push to deploy."
