import Store from '../store/Store'
import React from 'react'

export default class Prompteur extends React.Component {

  constructor() {
    super();
    let textToDisplay = Store.getText();
    let fontSize = Store.getFontSize();
    this.state = {
      text: textToDisplay,
      fontSize: fontSize
    };
  }

  componentDidMount(){
    Store.onChange = this.onChange.bind(this)
  }

  componentWillUnmount() {
    this.setState({});
  }

  onChange() {
    let fontSize = Store.getFontSize();
    console.log(fontSize);
    this.setState({
      fontSize: fontSize
    });
  }

  render(){
    var divStyle = {
      fontSize: this.state.fontSize,
      fontFamily: 'Arial'
    };
    return(
      <div className="pompteur" key='1'
        style={divStyle}
        >
        <p>text</p> 
        <div className="container-fluid" >
          {this.state.text}
        </div>
      </div>
    )
  }

}

