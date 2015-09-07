import Store from '../store/Store'
import TextComponent from './TextComponent'
import React from 'react'
import $ from 'jquery'
import scrollTo from 'jquery.scrollto'
import Mousetrap from 'mousetrap'
import toastr from 'toastr'

export default class Prompteur extends React.Component {

  constructor() {
    super();
    let speed = Store.getSpeed();
    this.state = {
      run: true,
      speed: speed
    };
  }

  endCondition() {
    return $(document).scrollTop() === $(document).height() - $(window).height();
  }

  switchAnimation() {
    console.log('switch');
    console.log(this.state.run);
    if(this.state.run === true) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
  }

  stopAnimation() {
    this.setState({ run: false });
    console.log('stop');
    $(window).stop();
  }

  startAnimation() {
    console.log('start');
    this.setState({ run: true });
    this.startScrolling();
  }

  handleClick(e) {
    e.preventDefault();
    this.startScrolling();
  }

  startScrolling() {
    let scrollSize = $(document).height() - $(window).height();
    if(this.state.speed === undefined || this.state.speed <= 0) {
      toastr.error('Speed not correct');
    } else {
      let nbIteration = Math.ceil(scrollSize/1000);
      this.scrolling(this.state.speed, nbIteration);
    }
  }

  scrolling(scrollTime, nbIteration) {
    console.log(nbIteration);
    if( nbIteration < 0 || this.endCondition()) {
      console.log('fini !!');
      return;
    } else {
      $(window).scrollTo(
        '+=1000',
        scrollTime*1000,
        {easing: 'linear',
          interrupt: true,
          onAfter: function() {
            nbIteration = Math.ceil(this.state.speed / 1000);
            this.scrolling(scrollTime, nbIteration );
          }.bind(this)
        });
    }
  }

  buttonTest(e) {
    e.preventDefault();
    console.log($(document).height());
    console.log($(document).height() - $(window).height());
    console.log($(document).scrollTop());
    console.log(this.endCondition());
  }

  onChange() {
    let speed = Store.getSpeed();
    this.setState({
      speed: speed,
    });
  }

  componentWillUnmount() {
    this.setState({});
  }

  componentDidMount(){
    Store.onChangeSpeed = this.onChange.bind(this)
    Mousetrap.bind('j', function(e) {
     this.switchAnimation(); 
     return false;
    }.bind(this));
  }

  render(){
    return(
      <div className="prompteur" key='1' >
        <button onClick={this.handleClick.bind(this)} > start scrolling </button>
        <TextComponent />
        <button onClick={this.buttonTest.bind(this)} > position </button>
      </div>
    )
  }

}

