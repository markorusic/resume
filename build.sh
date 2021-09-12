#!/usr/bin/env bash

project_root="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
resume_dir_path="$project_root/src/data"
resume="$resume_dir_path/resume-data.json"
resume_tmp="$resume_dir_path/resume-data.tmp.json"

file="$resume"

if [ "$1" != "" ]; then
    file=$1
    cat "$resume" > "$resume_tmp"
    cat "$file" > "$resume"

    npm run build

    cat "$resume_tmp" > "$resume"
    rm "$resume_tmp"

    npm run serve
else
    npm run build
    npm run serve
fi

