const merge = requiere('deepmerge');
const wdioconf = require('./wdio.conf.js');

exports.config = merge(wdioconf.config, {
    
    baseUrl: 'https://google.com',
    waitForTimeout: 15000
})
