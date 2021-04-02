const dotenv = require('dotenv');
const envFound = dotenv.config();

if (!dotenv) {
    throw new Error("Couldn´t find .env file.")
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    },
    database: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_KEY,
        port: process.env.DATABASE_PORT
    },
}