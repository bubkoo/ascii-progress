var ProgressBar = require('../index.js');

var bar = new ProgressBar({
  schema: ' [:filled.gradient(red,magenta):blank] :current/:total :percent :elapseds :etas'
});

var iv = setInterval(function () {

  bar.tick();

  if (bar.completed) {
    clearInterval(iv);
  }

}, 100);
