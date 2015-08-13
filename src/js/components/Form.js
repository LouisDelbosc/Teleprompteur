import React from 'react'
import Store from '../store/Store'
import reactMixin from 'react-mixin'
import {Navigation} from 'react-router'

export default class Form extends React.Component {

  handleClick(e) {
    e.preventDefault();
    let text = document.getElementById('text').value;
    this.transition(text)
  }

  transition(text) {
    Store.saveText(text);
    this.transitionTo('prompteur')
  }

  render(){
    return(
      <div className="form" >
        <input type="text" id="text" placeholder="text you wanna display" />
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>
    )
  }

}

reactMixin.onClass(Form, Navigation)
