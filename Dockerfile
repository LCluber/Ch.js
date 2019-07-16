FROM node:12.6.0-stretch

# Install git
RUN apt install git-all

# Create app directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i -G typescript rollup uglify-js jest commitizen && npm i

# Bundle app source
COPY . .

# EXPOSE 3000
# USER node
# CMD [ "npm", "start" ]


# docker build -t vps239051.ovh.net:5000/vortalcombat:2.8.0 .
# docker push vps239051.ovh.net:5000/vortalcombat:2.8.0
# sudo docker pull localhost:5000/vortalcombat:2.8.0
# sudo docker run -d -p 3100:3000 -v /home/lcluber/vortalcombat/saves:/usr/src/app/web/saves localhost:5000/vortalcombat:2.8.0
