const express = require('express');
const todoControllers = require('./controllers/todoControllers');

// defining application
const app = express();

// set up template engines
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoControllers(app);

// listen to port
app.listen(3000);
console.log('listen to port 3000');
