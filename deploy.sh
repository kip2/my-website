#!/bin/bash

THRESHOLD=10

USED_DISK=$(df --output=used / | tail -n 1 | awk '{print $1 / 1024 / 1024}')

if (( $(echo "$USED_DISK > $THRESHOLD" | bc -l) )); then
    echo "Disk usage is above ${THRESHOLD}GB, running docker system prune -a"
    yes | docker system prune -a
fi

git pull origin main 
if [ $? -ne 0 ]; then
    echo "Error: Git pull failed"
    git checkout -- .
    exit 1
fi

docker build -t myapp-build .
if [ $? -ne 0 ]; then
    echo "Error: Docker build failed"
    exit 1
fi

docker run --name temp-container myapp-build
if [ $? -ne 0 ]; then
    echo "Error: Docker run failed"
    exit 1
fi

docker cp temp-container:/app/dist ./
if [ $? -ne 0 ]; then
    echo "Error: Docker copy failed"
    exit 1
fi

docker rm -f temp-container
if [ $? -ne 0 ]; then
    echo "Error: Docker remove failed"
    exit 1
fi
