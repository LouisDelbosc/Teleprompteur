import React from 'react'

class Form extends React.Component {

  handleClick() {
    let text = document.getElementById('text').value;
    console.log(text);
  }

  render(){
    return(
      <div className="Form" >
        <input type="text" id="text" placeholder="text you wanna display" />
        <button onClick={this.handleClick} >CLick</button>
      </div>
    )
  }

}

export default Form
