import React from 'react';
import {Link, RouteHandler} from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div className="app" >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="form" >UserPage</Link></li>
          <li><Link to="prompteur" >About</Link></li>
        </ul>
        <RouteHandler />
      </div>
    )
  }

};

export default App
