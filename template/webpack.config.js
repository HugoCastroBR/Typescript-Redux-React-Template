const path = require('path');


function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}
module.exports = {
    resolve: {
        alias: {
            actions: srcPath('app/actions'),
            selectors: srcPath('app/selectors'),
            ui: srcPath('app/ui'),
            logger: srcPath('util/logger'),
        },
    },
};