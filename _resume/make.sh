#!/usr/bin/env sh

set -e

(
    set -x;
    pipx run --spec git+https://github.com/jayanthkoushik/shiny-mdc shinymdc \
        -q \
        -i "main.md" \
        -o "resume.pdf" \
        -t "_template/main.tex" \
        -N ".npm" \
        -d ".shinymdc/default"
)
(
    set -x;
    pipx run --spec git+https://github.com/jayanthkoushik/shiny-mdc shinymdc \
        -q \
        -i "main.md" \
        -o "resume.print.pdf" \
        -t "_template/main.tex" \
        -N ".npm" \
        -d ".shinymdc/print" \
        -m "forprint=true"
)
