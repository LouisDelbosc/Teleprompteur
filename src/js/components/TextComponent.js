import React from 'react'
import Store from '../store/Store'

export default class TextComponent extends React.Component {

  constructor() {
    super();
    let textToDisplay = Store.getText();
    let fontSize = Store.getFontSize();
    this.state = {
      text: textToDisplay,
      fontSize: fontSize
    };
  }

  onChange() {
    let fontSize = Store.getFontSize();
    this.setState({
      fontSize: fontSize,
    });
  }

  componentWillUnmount() {
    this.setState({});
  }

  componentDidMount(){
    Store.onChangeFont = this.onChange.bind(this)
  }

  render() {
    var Style = {
      fontSize: this.state.fontSize,
      fontFamily: 'Arial'
    };
    return (
      <div className="text" key="text-1" style={Style} >
        {this.state.text}
      </div>
    )
  }
}
