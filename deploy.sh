#!/bin/bash
yarn build
docker build -t condef5/jukebox .
docker push condef5/jukebox

ssh root@207.154.247.193 << EOF
docker pull condef5/jukebox:latest
docker stop web || true
docker rm web || true
docker rmi condef5/jukebox:current || true
docker tag condef5/jukebox:latest condef5/jukebox:current
docker run -d --restart always --name web -p 80:80 condef5/jukebox:current
EOF
