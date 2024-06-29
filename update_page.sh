#!/bin/bash

git pull origin main 
if [ $? -ne 0 ]; then
    echo "Error: Git pull failed"
    git checkout -- .
    exit 1
fi

rm -rf dist/pages

cp -r public/pages dist/pages

echo "Page files replacement completed."