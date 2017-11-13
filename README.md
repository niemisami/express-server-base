# Simple Express server setup

ES6 Express server skeleton which includes PostgreSQL through Sequelize, testing environment with Mocha, env variables with Dotenv


## How to run: 
- Configurations will be stored in `./server/config/*.js` files which retrieves information from system environment: `process.env` 
1. Clone the [project](https://github.com/niemisami/express-server-base.git): `git clone https://github.com/niemisami/express-server-base.git`
2. Open project folder and run: `npm install`
3. Create `.env` file on project root and copy and fill the necessary environment variables (If there is any question contact the author Sami Nieminen): 
  ```
  NODE_ENV=development
  PORT=3000
  DB_URL=<psql_url>
  DB_USER=<psql_user_name>
  DB_PASSWORD=<psql_user_password>
  AUTH_SECRET=<secret message for JWT>
  ```
4. Run: `npm start` or `npm dev` which starts server with `nodemon` git and without linter

## Production usage

- Get latest changes: `git pull`
- Check installations: `npm install`
- Build: `npm run serve`

## Tests
Tests are located in `./test/` folder with prefix `.spec.js`. 

Run: `npm run test`

> Using `npm run dev` starts server with `nodemon` but will ignore changes inside test files.

## Database

Database calls are dealt by Sequelize based on the models defined in `./server/models/*`

[Sequelize API](http://docs.sequelizejs.com/manual/tutorial/models-usage.html) 

## VSCode

Folders `node_modules` and `.vscode` are hidden on editor. Configurations in `.vscode/settings.json`

# Version history

**13.11.2017**

Initial setup