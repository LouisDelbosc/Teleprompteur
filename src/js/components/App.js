import React from 'react';
import {Link, RouteHandler} from 'react-router';

var App = React.createClass({
  render: function() {
    return (
      <div className="app" >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="user" >UserPage</Link></li>
          <li><Link to="about" >About</Link></li>
        </ul>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
