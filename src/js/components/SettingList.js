import React from 'react'
import Store from '../store/Store'

export default class SettingList extends React.Component {

  constructor() {
    super();
    let fontSize = Store.getFontSize();
    let speed = Store.getSpeed();
    this.state = {
      fontSize: fontSize,
      speed: speed
    }
  }

  handleSizeChange(e) {
    this.setState({
      fontSize: e.target.value
    });
  }

  handleSpeedChange(e) {
    this.setState({
      speed: e.target.value
    });
  }

  render() {
    return (
      <ul>
        <li>
          <input
            type="number"
            id="fontSize"
            onChange={this.handleSizeChange.bind(this)}
            value={this.state.fontSize} />
        </li>
        <li>
          <input
            type="number"
            id="speed"
            onChange={this.handleSpeedChange.bind(this)}
            value={this.state.speed} />
        </li>
      </ul>
    )
  }
}
