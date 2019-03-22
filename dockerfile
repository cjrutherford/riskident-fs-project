FROM ubuntu:xenial

RUN apt-get update && apt-get install
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
COPY . /src

WORKDIR /src
RUN npm install -g yarn
RUN yarn install
RUN cd ri-client && yarn install
RUN npm install -g @angular/cli nodemon
RUN cd ri-client && yarn install
RUN cd ri-client && ng build --aot=true --outputPath="../dist/client/"


CMD ["yarn", "watch-node"]




