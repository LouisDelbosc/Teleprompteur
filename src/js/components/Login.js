import React from 'react';
import {Navigation} from 'react-router';
import UserStore from '../stores/UserStore';
import LoginActions from '../actions/LoginActions';

var Login = React.createClass({

  /*
   * To use transitionTo/replaceWith/redirect and some function related to the router
   */
  mixins: [ Navigation ],

  /*
   * Set the initial state
   */
  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },

  /*
   * Submit the form
   * Clear the input
   */
  handleSubmit(event) {
    event.preventDefault();
    LoginActions.submitLoginForm(this.state);
    this.clearAndFocus();
  },

  /*
   * Update the state when there are changes in the input
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },

  /*
   * Clear the state and input and do the focus on the name input
   */
  clearAndFocus() {
    this.setState({username: '', password: ''}, function() {
      React.findDOMNode(this.refs.name).focus();
    });
  },

  /*
   * Replace the login page url by the user page url
   */
  onChange() {
    if( UserStore.getIsLogged ) {
      this.replaceWith('user');
    }
  },

  /*
   * If you are already connected, will skip the page
   * listen to the onChange event from the UserStore
   */
  componentDidMount() {
    LoginActions.submitLoginForm(this.state);
    UserStore.onChange = this.onChange;
  },

  /*
   * Render the form and the button inside of the App component
   */
  render() {
    return (
      <div className="login" >
        <p>Logging page</p>
        <form onSubmit={this.handleSubmit} >
          <input 
            ref="name" 
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username" 
          />
          <input
            type="password" 
            name="password"
            ref="password" 
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password" 
          />
          <button > Submit </button>
        </form>
      </div>
    );
  }
});

module.exports = Login;
