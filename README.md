# personal-finance-app

# HOW TO INSTALL DEPENDENCES

* Clone the repository git clone https://github.com/peamarelle/personal-finance-app.git

* go to directory cd personals-finances-app

* Run command npm install

* Generate .env file.

# Scripts

* Run npm run dev to nodemon mode.

* npm start to deploy aplication in production env.

* Run node index to traditional mode.

# PACKAGES

* express (create server and API-REST´s endpoints).
* nodemon (aplication refresh whenever we modify code).
* morgan (request and response informartion).
* dotenv (enviroment variables).
* winston (logger to app´s operations ).
* swagger-ui-express (For api documentation).
* sequelize (mysql db connection).
* cors (comunication with front end app).

# Servers

* http://localhost:3000/api/v1 (development).


# Documentation

* http://localhost:3000/documentation (swagger documentation)

# Routes

* GET /money (find money).
* POST /money (create money trasaction).
* PUT /money/:id (update by id money trasaction).
* DELETE /money/:id (delete by id money trasaction).
* GET /money/balance (calculate balance).

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.