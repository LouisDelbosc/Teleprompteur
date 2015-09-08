import React from 'react';
import SettingList from './SettingList';
import Store from '../store/Store';
import {Link, RouteHandler} from 'react-router';

class App extends React.Component {

  render() {
    var style = {
      color: 'white',
      backgroundSize: '100% 100%',
      backgroundColor: 'black'
    };
    return (
      <div className="container-fluid"
        style={style}
        >
        <div className="container" >
          <SettingList />
        </div>
        <RouteHandler />
      </div>
    )
  }

};

export default App
