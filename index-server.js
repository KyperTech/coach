'use strict';

var React = require('react');
var Router = require('redux-router');

module.exports = function(url, password, callback) {

  Router.run(routes, url, function(Handler, state) {
    // if (state.routes[1].name === 'not-found') {
    //   var notFoundError = new Error('Not found');
    //   notFoundError.status = 404;
    //   return callback(notFoundError, <Handler />);
    // }

    // contentStore.fetchContentForRouterState(state).then(storeProps => {
    //   var appData = {[state.path]: storeProps};
    //   var appMarkup = React.renderToString(<Handler {...storeProps} />);
    //   return {appData, appMarkup};
    // }).nodeify(callback);
  });
};
