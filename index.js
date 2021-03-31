const app = require('./src/app');

let server;
  server = app.listen(3001, () => {
    console.log(`Listening to port ${3001}`);
});