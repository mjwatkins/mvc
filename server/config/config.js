var fs = require('fse');
var path = require('path');


var configFilePath = process.env.GE_SYSTEM_CONFIG || path.join(__dirname, 'system.json');
var config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));

module.exports = config;
