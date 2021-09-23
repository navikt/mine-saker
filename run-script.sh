#!/bin/bash
echo "Running run-script.sh"

#Associative array 
declare -A variables
variables[ENVIRONMENT]=$ENVIRONMENT
variables[MINE_SAKER_API_URL]=$MINE_SAKER_API_URL
variables[LOGINSERVICE_URL]=$LOGINSERVICE_URL
variables[INNLOGGINGSSTATUS]=$INNLOGGINGSSTATUS



#apply function on each variable
forEachVariable() {
  for variable in "${!variables[@]}"
    do
      ($1 $variable) || exit $?
    done
}

checkAvailability () {
  if test -z ${variables[$1]}; then
    echo "For å kunne starte applikasjonen må ${1} være satt."
    echo "Avbryter oppstart."
    exit 1
  fi
}

printAvailability () {
	echo "* ${1}"
}

makeAvailable() {
  echo "window.env.${1}=\"${variables[$1]}\";" >> ../build/config.js
}

(forEachVariable checkAvailability) || exit $?

echo "Tilgjengeliggjør følgende miljøvariabler for frontend-en:"
forEachVariable printAvailability

echo "window.env={};" > ../build/config.js
forEachVariable makeAvailable

node ./server.js