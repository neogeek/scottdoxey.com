#!/bin/bash

REDON=$(tput setaf 1)
GREENON=$(tput setaf 2)
COLOROFF=$(tput sgr0)

mkdir -p build/

printf "Building dynamic files "

find . -type f -name "*.mjs" -not -path "./node_modules/*" -not -path "./_*/*" | while read -r FILEPATH; do
    DIR=$(dirname "${FILEPATH}")
    FILENAME=$(basename "${FILEPATH}")

    HTML=$(cd "${DIR}" && node "${FILENAME}")

    mkdir -p "build${DIR:1}"

    if [ "${FILENAME%.mjs}" == "index" ]; then
        echo "${HTML}" | npx prettier --parser html >"build${DIR:1}/${FILENAME%.mjs}.html"
    else
        mkdir -p "build${DIR:1}/${FILENAME%.mjs}"

        echo "${HTML}" | npx prettier --parser html >"build${DIR:1}/${FILENAME%.mjs}/index.html"
    fi

    printf "."
done

printf " %sDONE%s\n" "${GREENON}" "${COLOROFF}"
