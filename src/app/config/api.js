if (process.env.NODE_ENV === 'production') {
    module.exports = require('./pro-api.js');
} else {
    module.exports = require('./dip-api.js');
}