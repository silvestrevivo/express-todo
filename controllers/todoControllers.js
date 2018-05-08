const bodyParser = require('body-parser');

var data = [
  { item: 'get milk' },
  { item: 'walk dog' },
  { item: 'listen to music' },
  { item: 'read a book' }
];

const urlencodeParser = bodyParser.urlencoded({ extended: false });

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
