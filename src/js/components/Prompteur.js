import Store from '../store/Store'
import React from 'react'

export default class Prompteur extends React.Component {

  constructor() {
    super();
    let textToDisplay = Store.getText();
    this.state = {
      text: textToDisplay
    };
  }

  componentDidMount(){
    console.log('mounted');
  }

  componentWillUnmount() {
    this.setState({});
  }

  render(){
    return(
      <div className="pompteur" >
        <p>text</p> 
        <div className="container-fluid" >
          {this.state.text}
        </div>
      </div>
    )
  }

}
