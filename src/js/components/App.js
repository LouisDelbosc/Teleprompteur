import React from 'react';
import SettingList from './SettingList';
import Store from '../store/Store';
import {Link, RouteHandler} from 'react-router';

class App extends React.Component {

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
        </ul>
        <SettingList />
        <RouteHandler />
      </div>
    )
  }

};

export default App
