#!/bin/bash

REDON=$(tput setaf 1)
GREENON=$(tput setaf 2)
COLOROFF=$(tput sgr0)

printf "Copying css directory "

npx copyfiles -u 1 "css/**/*" build/css && printf "."

printf " %sDONE%s\n" "${GREENON}" "${COLOROFF}"

printf "Copying images directory "

npx copyfiles -u 1 "images/**/*" build/images && printf "."

printf " %sDONE%s\n" "${GREENON}" "${COLOROFF}"

printf "Copying other files "

npx copyfiles manifest.json build/ && printf "."
npx copyfiles robots.txt build/ && printf "."

printf " %sDONE%s\n" "${GREENON}" "${COLOROFF}"
