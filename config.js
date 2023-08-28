const dotenv = require('dotenv');
dotenv.config();

const config = {};

//Config values
config.system = {
    port: process.env.PORT
};

module.exports = config;