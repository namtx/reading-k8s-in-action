#! /bin/bash

trap "exit" SIGINT
mkdir /var/htdocs
while :
do
	ech $(date) Writing fortune to /var/htdocs/index.html
	/usr/games/fortune > /var/htdocs/index.html
	sleep 10
done
