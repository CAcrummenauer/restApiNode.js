Trabalhando com rest API usando o Node.js

npm init -y // Isso cria o arquivo package.json
Express ajuda a lidar com rotas e  (agora com rotas):
npm install express

para iniciar o servidor:
node server
É preciso reiniciar o servidor a cada mudança no código. Usar nodemon para resolver isso:
npm install -D nodemon
Para rodar o nodemon:
adicionar "dev": "nodemon server.js" em scripts do arquivo package.json e inserir no terminal:
npm run dev

Usando Docker para evitar problemas com instalações de recursos:
Instalar Docker adequado para o ambiente e usar o terminal adequado
Para instalar o mongo no Docker:
docker pull mongo
Para usar o mongo na VM do Docker e redirecionar portas:
docker run --name mongodb -p 27017:27017 -d mongo
Para verificar máquinas viruais rodando no docker:
docker ps
No meu caso, o SO não é adequado com a nova versão do Docker...
Robo 3T é uma ferramenta interessante para visualizar informações com o MongoDB

Adicionando uma dependência de produção para o MongoDB:
npm install mongoose
Mongoose é um ORM (object relation mapping) para bancos não relacionais

Para importar de forma automática, usar:
npm install require-dir