/* eslint-disable no-console, no-use-before-define */

import Express from 'express';
// import qs from 'qs';

// import webpack from 'webpack';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config';
import config from '../webpack-production.config';

import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../app/store/configureStore';
// import App from '../common/containers/App';
import AppRouter from '../app/routes';

// import renderIndex from '../lib/render-index';
import builtBundle from '../build/bundle-build';

const app = new Express();

// Use this middleware to set up hot module reloading via webpack.
// const compiler = webpack(webpackConfig);
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
// app.use(webpackHotMiddleware(compiler));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
// console.log('yo----!!', builtBundle);
  // Query our mock API asynchronously
  // fetchCounter(apiResult => {
    // Read the counter from the request, if provided
    // const params = qs.parse(req.query);
    // const counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
    const initialState = { word: 'asdf' };

    // Create a new Redux store instance
    const store = configureStore(initialState);

    // Render the component to a string
    const html = React.renderToString(
      <Provider store={store}>
        <AppRouter />
      </Provider>);
    //
    // Grab the initial state from our Redux store
    const finalState = store.getState();

    // Send the rendered page back to the client
    builtBundle((response) => {
      console.log(response);
      res.send(renderIndex({
        appData: finalState,
        appMarkup: html
      }));
    });
  // });
}

// function renderFullPage(html, initialState) {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux Universal Example</title>
//       </head>
//       <body>
//         <div id="app">${html}</div>
//         <script>
//           window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
//         </script>
//         <script src="/static/bundle.js"></script>
//       </body>
//     </html>
//     `;
// }

app.listen(config.port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${config.port}. Open up http://localhost:${config.port}/ in your browser.`);
  }
});
