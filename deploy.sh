#!/bin/bash

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
