import React from 'react';
import {Link, RouteHandler} from 'react-router';

class App extends React.Component {

  render() {
    return (
      <div className="app" >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="form" >Form</Link></li>
          <li><Link to="prompteur" >Texte</Link></li>
        </ul>
        <RouteHandler />
      </div>
    )
  }

};

export default App
