const {ExpressServer} = require('./server/expressServer');
const config = require('../config')
const sequelize = require('../database');
const logger = require('../loaders/logger')

module.exports = async () => {

    const  server =  new ExpressServer();
    
    await sequelize.authenticate();

    logger.info('Connection has been established successfully.');

    server.start();

    logger.info(`########################################
    Server listening on port ${config.port}
    ########################################`);
}
