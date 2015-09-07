import App from './components/App';
import Form from './components/Form'
import Prompteur from './components/Prompteur'
import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Route, Routes, NotFoundRoute} from 'react-router';

require('../main.less');
require('toastr/build/toastr.min.css');

let routes = (
  <Route name="app" path="/" handler={App} >
    <Route name="form" handler={Form} />
    <Route name="prompteur" handler={Prompteur} />
    <DefaultRoute handler={Form} />
  </Route>
);

Router.run(routes, Router.HashLocalion, function(Handler) {
  React.render(<Handler />, document.body);
});
