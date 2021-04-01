# personals-finances-app

# HOW TO INSTALL DEPENDENCES

* Clone the repository git clone https://github.com/peamarelle/personals-finances-app.git

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
* uuid (to generate transaction id)

# Servers

* http://localhost:3000/api/v1 (development).


# Routes

* GET /money (find money).
* POST /money (create money trasaction).
* PUT /money/:id (update by id money trasaction).
* DELETE /money/:id (delete by id money trasaction).
* GET /documentation (api documentation).

