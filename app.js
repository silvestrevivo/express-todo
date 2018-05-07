const express = require('express');

// defining application
const app = express();

// set up template engines
app.set('view engines', 'ejs');

// static files
app.use(express.static('./public'));

// listen to port
app.listen(3000);
console.log('listen to port 3000');
