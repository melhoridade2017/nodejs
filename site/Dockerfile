#Maquina
FROM node:latest

#Servidor PM2 instale - maquina
RUN npm i --g nodemon

#Onde fica o projeto - maquina
ENV HOME=/home/site

#Onde deve trabalhar - maquina
WORKDIR $HOME
COPY . $HOME

#Execute o projeto - maquina
CMD ["nodemon", "-L", "/home/site/index"]