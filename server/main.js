const PORT = 9000;
const { syncAndSeed } = require('./db');
const server = require('./index');

syncAndSeed().then(() => {
  server.listen(PORT, () =>
    console.log(`
        
        Listening on port: ${PORT}

        http://localhost: ${PORT}

        http://127.0.0.1:  ${PORT}

        'I'm sorry, Dave; I'm afraid I can't do that' - HAL ${PORT}

        `)
  );
});
