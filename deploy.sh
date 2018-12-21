#!/bin/bash
docker build -t condef5/jukebox .
docker push condef5/jukebox

ssh root@46.101.98.60 << EOF
docker pull condef5/jukebox:latest
docker stop web || true
docker rm web || true
docker rmi condef5/jukebox:current || true
docker tag condef5/jukebox:latest condef5/jukebox:current
docker run -d --restart always --name web -p 80:3000 condef5/jukebox:current
EOF
