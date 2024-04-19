var fs = require('fs')
var postcss = require('postcss')
var minmax = require('postcss-media-minmax')
var themeCss = 'dist/theme.css'


fs.readFile(themeCss, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var output = postcss()
  .use(minmax())
  .process(data)
  .css

  fs.writeFile(themeCss, output, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});