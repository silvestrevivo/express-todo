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

// Parsing the body for post request
const urlencodeParser = bodyParser.urlencoded({ extended: false });

// end points to serve request on front-end
module.exports = function (app) {

  // getting data from database
  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', { todos: data });
    });
  });

  // writting data in database
  app.post('/todo', urlencodeParser, (req, res) => {
    var newTodo = Todo(req.body).save((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  // deleting data in database
  app.delete('/todo/:item', (req, res) => {
    Todo.find({ item: req.params.item.replace(/\-/g, ' ') }).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
}
