import Store from '../store/Store'
import React from 'react'
import $ from 'jquery'
import scrollTo from 'jquery.scrollto'

export default class Prompteur extends React.Component {

  constructor() {
    super();
    let textToDisplay = Store.getText();
    let fontSize = Store.getFontSize();
    let pixelScroll = Store.getPixelScroll();
    this.state = {
      text: textToDisplay,
      fontSize: fontSize
    };
  }

  startScroll(e) {
    e.preventDefault();
    $(window).scrollTo('+=' + this.state.pixelScroll, 800);
  }

  componentDidMount(){
    Store.onChange = this.onChange.bind(this)
  }

  componentWillUnmount() {
    this.setState({});
  }

  onChange() {
    let fontSize = Store.getFontSize();
    let nbPixel = Store.getPixelScroll();
    this.setState({
      fontSize: fontSize,
      pixelScroll: nbPixel
    });
    console.log(this.state);
    console.log(nbPixel);
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
        <button onClick={this.startScroll.bind(this)} > scroll </button>
        <p>text</p> 
        <div className="container-fluid" >
          {this.state.text}
        </div>
      </div>
    )
  }

}

