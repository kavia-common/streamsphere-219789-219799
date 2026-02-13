#!/bin/bash
cd /home/kavia/workspace/code-generation/streamsphere-219789-219799/youtube_clone_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

