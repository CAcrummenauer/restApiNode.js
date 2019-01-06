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


