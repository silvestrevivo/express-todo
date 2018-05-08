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
    console.log(req.body)
    data.push(req.body);
    res.json(data);
  });

  // deleting data in database
  app.delete('/todo', (req, res) => {

  });
}
