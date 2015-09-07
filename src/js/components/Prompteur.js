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
      run: false,
      speed: speed
    };
  }

  modifySpeed() {
    if(this.state.run === true) {
      $(window).stop();
      this.startScrolling();
    }
  }

  addSpeed() {
    this.setState(function(previousState, currentProps) {
      return { speed: previousState.speed + 2 };
    });
    Store.saveSpeed(this.state.speed);
    this.modifySpeed();
  }

  lessSpeed() {
    this.setState(function(previousState, currentProps) {
      return { speed: previousState.speed - 2 };
    });
    Store.saveSpeed(this.state.speed);
    this.modifySpeed();
  }

  endCondition() {
    return $(document).scrollTop() === $(document).height() - $(window).height();
  }

  switchAnimation() {
    if(this.state.run === true) {
      this.stopAnimation();
    } else {
      this.startAnimation();
    }
  }

  stopAnimation() {
    $(window).stop();
  }

  startAnimation() {
    this.setState({ run: true });
    this.startScrolling();
  }

  handleClick(e) {
    e.preventDefault();
    this.startScrolling();
  }

  startScrolling() {
    let scrollSize = $(document).height() - $(document).scrollTop() - $(window).height();
    if(this.state.speed === undefined || this.state.speed <= 0) {
      toastr.error('Speed not correct');
    } else {
      let nbIteration = Math.ceil(scrollSize/1000);
      this.scrolling(this.state.speed, nbIteration);
    }
  }

  scrolling(scrollTime, nbIteration) {
    if( nbIteration < 0 || this.endCondition()) {
      this.setState({ run: false });
      return;
    } else {
      $(window).scrollTo(
        '+=1000',
        scrollTime*1000,
        {easing: 'linear',
          interrupt: true,
          onAfter: function() {
            let scrollSize = $(document).height() - $(document).scrollTop() - $(window).height();
            this.scrolling(scrollTime, Math.ceil(scrollSize / 1000) );
          }.bind(this)
        });
    }
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

    Mousetrap.bind('0', function(e) { this.switchAnimation(); return false; }.bind(this));
    Mousetrap.bind('+', function(){ this.addSpeed(); }.bind(this));
    Mousetrap.bind('-', function() { this.lessSpeed(); }.bind(this));
  }

  render(){
    return(
      <div className="container-fluid" key='1' >
        <button
          className="btn btn-default"
          onClick={this.handleClick.bind(this)} > start scrolling </button>
        <TextComponent />
      </div>
    )
  }

}

