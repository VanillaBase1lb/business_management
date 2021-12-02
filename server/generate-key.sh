#!/bin/sh
openssl req -x509 -nodes -days 365 -subj "/C=IN/ST=OD/O=dbms_lab/CN=vanillabase1lb" -addext "subjectAltName=DNS:localhost.com" -newkey rsa:2048 -keyout ./selfsigned-key.key -out ./selfsigned-cert.crt;
