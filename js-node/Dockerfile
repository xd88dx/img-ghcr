FROM node:alpine3.22

WORKDIR /tmp

COPY index.js index.html package.json package-lock.json ./

EXPOSE 3000/tcp

RUN apk update && apk add --no-cache bash openssl curl &&\
    chmod +x index.js &&\
    npm install

CMD ["node", "index.js"]
