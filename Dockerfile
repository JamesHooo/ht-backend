FROM node:0.12.2
RUN npm install mysql
EXPOSE 8080
COPY buy.js .
CMD node ./buy.js