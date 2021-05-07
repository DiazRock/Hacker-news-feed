FROM node:12.19.0-alpine3.9 AS development

WORKDIR /usr/src/app

COPY ./start.sh /start.sh

RUN chmod +x /start.sh

ENTRYPOINT [ "/start.sh" ]
