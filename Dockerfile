FROM jayanthkoushik/paje:latest

RUN pacman -S rsync --noconfirm
ADD main.sh /main.sh
