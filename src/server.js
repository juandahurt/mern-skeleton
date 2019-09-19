const {config, app} = require('./config');

app.listen(config.port, (err) => {
    if (err) {
        console.error('server: error: %s', err.message);
    }
    console.log('server: listening on port %s.', config.port);
});