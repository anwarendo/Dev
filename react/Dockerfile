FROM ubuntu:21.04

WORKDIR /home/react

# install the latest nodejs and npm with necessary build essentials
RUN apt-get update -y \
    && apt-get install -y tzdata \
    && apt-get install -y nodejs \
    && apt-get install -y npm \
    && npm install -g npm@8.0.0

# RUN npm install -g npx 

RUN npm install -g create-react-app

RUN create-react-app app

WORKDIR /home/react/app

RUN npm install axios && \
    npm i laravel-echo
    
COPY .env /home/react/app
# WORKDIR /home/react

ENTRYPOINT [ "npm", "start"]
# ENTRYPOINT [ "/bin/bash"]
