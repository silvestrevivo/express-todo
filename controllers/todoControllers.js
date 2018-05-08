const bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  database = require('./database');

// Connect to the database
mongoose.connect(database.db);

// Create schema
const todoSchema = new mongoose.Schema({
  item: String
});

// Model
const Todo = mongoose.model('Todo', todoSchema);
const itemOne = Todo({ item: 'buy flowers' }).save((err) => {
  if (err) throw err
  console.log('item saved')
});

// Parsing the body for post request
const urlencodeParser = bodyParser.urlencoded({ extended: false });

// end points to serve request on front-end
module.exports = function (app) {

  // getting data from database
  app.get('/todo', (req, res) => {
    res.render('todo', { todos: data });
  });

  // writting data in database
  app.post('/todo', urlencodeParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  // deleting data in database
  app.delete('/todo/:item', (req, res) => {
    data = data.filter(todo => todo.item.replace(/ /g, '-') != req.params.item);
    res.json(data);
  });
}
