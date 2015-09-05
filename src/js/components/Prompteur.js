import Store from '../store/Store'
import React from 'react'
import $ from 'jquery'
import scrollTo from 'jquery.scrollto'
import toastr from 'toastr'

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

  handleClick(e) {
    e.preventDefault();
    let scrollTime = this.state.pixelScroll;
    let scrollSize = $(document).height() - $(window).height();
    if(this.state.pixelScroll === undefined) {
      toastr.error('Update the number of pixel by second');
    } else {
      let nbIteration = Math.ceil(scrollSize/1000);
      console.log(nbIteration);
      this.scrolling(scrollTime, nbIteration);
    }
  }

  scrolling(scrollTime, nbIteration) {
    console.log(nbIteration);
    if( nbIteration < 0 ) {
      console.log('fini !!');
      return;
    } else {
      $(window).scrollTo(
        '+=1000',
        scrollTime*1000,
        {easing: 'linear',
          interrupt: true,
          onAfter: function() {
            nbIteration = Math.ceil(this.state.pixelScroll / 1000)
            this.scrolling(scrollTime, nbIteration );
          }
        });
    }
  }

  buttonTest(e) {
    e.preventDefault();
    console.log($(document).height());
    console.log($(document).height() - $(window).height());
    console.log($(document).scrollTop());
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
        <button onClick={this.handleClick.bind(this)} > scroll </button>
        <p>text</p> 
        <div className="container-fluid" >
          {this.state.text}
        </div>
        <button onClick={this.buttonTest.bind(this)} > position </button>
      </div>
    )
  }

}

