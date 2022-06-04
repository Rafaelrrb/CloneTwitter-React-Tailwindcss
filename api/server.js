import { app } from './setup.js'

app.listen(9901, () => console.log('Server on...'))

/*
  inicia o package.json
    yarn init

  instala o koa
    yarn add koa

  yarn add @koa/router
  yarn add koa-bodyparser
  yarn add @koa/cors

  Prisma (https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-node-mysql)
    npm install prisma --save-dev
      npx prisma init
      yarn add @prisma/client

    Roda o prisma   
      yarn prisma studio

    Criar as tabelas 
      yarn prisma db push

  Criptografia para as senhas de login (https://www.npmjs.com/package/bcrypt)
    npm install bcrypt

    yarn add jsonwebtoken

*/
