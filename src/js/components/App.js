import React from 'react';
import Store from '../store/Store';
import {Link, RouteHandler} from 'react-router';

class App extends React.Component {

  handleChange(e) {
    Store.saveFontSize(e.target.value);
  }

  handlePixelChange(e) {
    Store.savePixelScroll(e.target.value);
  }

  render() {
    var style = {
      color: 'white',
      backgroundColor: 'black'
    };
    return (
      <div className="app"
        style={style}
        >
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="form" >Form</Link></li>
          <li>
            <input
              type="number"
              id="number" 
              onChange={this.handleChange}
              placeholder="font size" />
          </li>
          <li>
            <input
              type="number"
              id="pixel"
              onChange={this.handlePixelChange}
              placeholder="pixel/sec" />
          </li>
        </ul>
        <RouteHandler />
      </div>
    )
  }

};

export default App
