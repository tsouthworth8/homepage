#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Pulling branch updates"
git pull origin master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ root@trevorsouthworth.com:/var/www/trevorsouthworth.com
echo "Deployment complete"