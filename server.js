const Twig = require('twig');
const express = require('express');
const path = require('path')

const app = express();

var paths = {
  src: './src',
  build: './dist',
  data: './src/data/',
  sass: './src/assets/scss',
  css: './src/assets/css',
  js: './src/assets/js',
  images: './src/assets/images',
  img: './src/assets/images',
};

Twig.cache(false);
app.set('view engine', 'twig');
app.set('twig options', {
  base: paths.src + '/templates',
  strict_variables: false
});
app.set('views', paths.src + '/templates');

app.use(express.static(path.join('src')));

/*, '/!**!/!*.html'*/
app.get(['/:fileName'], (req, res) => {
  const dataForTwig = require('./src/data/data')

  const fileName = req.params.fileName
  // .url
  // .replace(/\..*$/g, '')
  // .replace(/^\//g,'')
  // || 'index';
  res.render(
    fileName + '.twig',
    {
      ...dataForTwig[fileName],
      url: '/' + fileName
    }
  );
});
app.get('/', function (req, res) {
  const dataForTwig = require('./src/data/data')
  res.render(
    'index.twig',
    {
      ...dataForTwig.index,
      url: '/'
    }
  );
});

const listener = app.listen();
const port = listener.address().port;

module.exports = port;