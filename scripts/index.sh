#!/usr/bin/env bash
# shellcheck disable=SC1000

# generate by create-script-file v4.0.1
# link (https://github.com/Template-generator/create-script-file/tree/v4.0.1)

# set -x #DEBUG - Display commands and their arguments as they are executed.
# set -v #VERBOSE - Display shell input lines as they are read.
# set -n #EVALUATE - Check syntax of the script but don't execute.

#/ -----------------------------------
#/ Description:  ...
#/ How to:       ...
#/               ...
#/ Option:       --help | -h | -? | help | h | ?
#/                   > show this message
#/               --version | -v | version | v
#/                   > show command version
#/ -----------------------------------
#/ Create by:    Kamontat Chantrachirathumrong <work@kamontat.net>
#/ Since:        04/04/2020
#/ -----------------------------------
#/ Error code    1      -- error
#/ -----------------------------------
#/ Known bug:    ...
#/ -----------------------------------
#// Version:      0.0.1   -- description
#//               0.0.2b1 -- beta-format
#//               0.0.2a1 -- alpha-format

# move to script directory
tmp=$PWD
filename="$(basename "${BASH_SOURCE[0]}")"

level=${level:-3} # 0=[], 1=[error], 2=[error|warn], 3=[error|warn|info], 4=[error|warn|info|debug]

# Option 1
cd "$(dirname "$0")" || exit 1
cd .. || exit 1 # go to project root

# Helper methods

to_log_file() {
  while read -r line; do
    info "$line" >>"$PWD/logs/${filename}.log"
  done </dev/stdin
}

completed() {
  info "task status: COMPLETED"
}

failured() {
  info "task status: FAILURED"
  info "more information: $PWD/logs/${filename}.log"
}

debug() {
  if (("$level" > 3)); then
    printf '{"level": "%s", "message": "%s", "source": "%s", "timestamp": "%s"}' "DEBUG" "$*" "$filename" "$(date +"%s")"
  fi
}

info() {
  if (("$level" > 2)); then
    printf '{"level": "%s", "message": "%s", "source": "%s", "timestamp": "%s"}' "INFO" "$*" "$filename" "$(date +"%s")"
  fi
}

warn() {
  if (("$level" > 1)); then
    printf '{"level": "%s", "message": "%s", "source": "%s", "timestamp": "%s"}' "ERROR" "$*" "$filename" "$(date +"%s")" >&2
  fi
}

error() {
  if (("$level" > 0)); then
    printf '{"level": "%s", "message": "%s", "source": "%s", "timestamp": "%s"}' "ERROR" "$*" "$filename" "$(date +"%s")"
  fi
}

set_option() {
  export OPTIONS=("$@")
}

start_command() {
  set_option "$@"

  if execute_command "${OPTIONS[@]}" | to_log_file; then
    completed
  else
    failured
  fi

}

# Custom code

command="$1"
subcommand="$2"
shift 2
arguments=("$@")

test -n "$subcommand" && subcommand="-$subcommand"
filepath="${PWD}/scripts/commands/${command}${subcommand}"

if test -f "$filepath"; then
  # shellcheck disable=SC1090
  source "$filepath" "${arguments[@]}"
else
  error "could not found command '$command', subcommand '$subcommand'"
  exit 2
fi

# END

cd "$tmp" || exit 1
unset tmp command subcommand
