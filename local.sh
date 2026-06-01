#!/bin/bash
set -e

npx prettier --write "assets/js/**/*.js"
npx eslint ./assets/js --format stylish
bundle install
bundle exec jekyll serve --livereload --incremental --trace
