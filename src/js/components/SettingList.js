import React from 'react'
import Store from '../store/Store'
import Mousetrap from 'mousetrap'

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
    Store.saveFontSize(e.target.value);
  }

  handleSpeedChange(e) {
    this.setState({
      speed: e.target.value
    });
    Store.saveSpeed(e.target.value);
  }

  onChangeSpeedNavBar() {
    let newSpeed = Store.getSpeed();
    this.setState({
      speed: newSpeed
    });
  }

  componentDidMount() {
    Store.onChangeSpeedNavBar = this.onChangeSpeedNavBar.bind(this);
  }

  render() {
    return (
      <div className="row" >
        <div className="form-group col-md-6" >
          <label htmlFor="exampleInputName2" > Font Size </label>
          <input
            className="form-control"
            type="number"
            id="fontSize"
            onChange={this.handleSizeChange.bind(this)}
            value={this.state.fontSize} />
        </div>
        <div className="form-group col-md-6" >
          <label htmlFor="exampleInputName2" > Second per 1000px </label>
          <input
            className="form-control"
            type="number"
            id="speed"
            onChange={this.handleSpeedChange.bind(this)}
            value={this.state.speed} />
        </div>
      </div>
    )
  }
}
