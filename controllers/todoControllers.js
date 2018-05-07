module.exports = function (app) {

  // getting data from database
  app.get('/todo', (req, res) => {
    res.render('todo');
  });

  // writting data in database
  app.post('/todo', (req, res) => {

  });

  // deleting data in database
  app.delete('/todo', (req, res) => {

  });
}
