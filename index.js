const express = require('express')
const app = express();
const config = require('./config');
const { engine } = require ('express-handlebars');
const path = require('path');

app.set('view engine', 'handlebars');
app.engine('handlebars', engine({ defaultLayout: `${__dirname}/views/layouts` }));
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public', {
  maxage: '1y',
}));

app.get('/', (req, res) => {
  //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
  res.render('index', { layout: 'main' });
});

app.listen(config.system.port, () => {
  console.log(`Example app listening on port ${config.system.port}`)
})