#!/bin/bash
set -e

MESSAGE=${1:-"Deploy update"}
ROOT_DIR=$(pwd)

echo "Doing some clean up..."
rm -rf /Users/nusaibarahman/Desktop/design-portfolio/.next
rm -rf /Users/nusaibarahman/Desktop/design-portfolio/out
rm -rf /Users/nusaibarahman/Desktop/design-portfolio/.git/index.lock

echo "🏗 Building site..."
npm run build

echo "🚀 Deploying to GitHub Pages (gh-pages branch)..."
cd out
git init
git checkout -B gh-pages
git remote add origin https://github.com/nusaibatron/design-portfolio.git || true
git add -A
git commit -m "$MESSAGE"
git push origin gh-pages --force

echo "🔁 Committing main branch changes..."
cd "$ROOT_DIR"
git add -A
git commit -m "$MESSAGE" || echo "✅ No main changes to commit"
git push origin main

echo "🌐 Deployed to: https://nusaibastuff.com"
