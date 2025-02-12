#  imagem oficial do Node.js como base
FROM node:18-alpine

# diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY . .

#  dependências do projeto
RUN npm install

# Constrói o projeto React
RUN npm run build

# Instala um servidor web para servir o build do React
RUN npm install -g serve

# Expõe a porta 6000
EXPOSE 6000

# rodar o servidor
CMD ["serve", "-s", "build", "-l", "6000"]
