/* eslint-disable no-console, no-use-before-define */

var Express = require('express');

var config = require('../webpack-production.config');

var renderIndex = require('../lib/render-index');
var renderApp = require('../build/bundle-server');

var app = new Express();

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Query our mock API asynchronously
  // fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    // const params = qs.parse(req.query);
    // const counter = parseInt(params.counter, 10) || apiResult || 0;


    // Send the rendered page back to the client
      res.send(renderIndex(renderApp()));
  // });
}

app.listen(config.port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${config.port}. Open up http://localhost:${config.port}/ in your browser.`);
  }
});
