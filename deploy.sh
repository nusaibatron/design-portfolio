#!/bin/bash
set -e

MESSAGE=${1:-"Deploy site update"}
ROOT_DIR=$(pwd)

echo "🧹 Cleaning build artifacts..."
rm -rf .next out

echo "🏗 Building site (includes static export)..."
npm run build

# --- Deploy to gh-pages ---
echo "🚀 Deploying to GitHub Pages (gh-pages branch)..."
cd out
git init
git checkout -B gh-pages
git remote add origin https://github.com/nusaibatron/design-portfolio.git || true
git add -A
git commit -m "$MESSAGE"
git push origin gh-pages --force

# --- Push main branch code ---
cd "$ROOT_DIR"
echo "🔁 Committing code changes to main..."
git add -A
git commit -m "$MESSAGE" || echo "✅ No main changes to commit"
git push origin main

echo "🌐 Deployed to: https://nusaibastuff.com"
