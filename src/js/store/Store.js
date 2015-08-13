var Store = {

  state: {
    text: ''
  },

  saveText(text) {
    this.state.text = text;
  },

  getText() {
    return this.state.text;
  }

};

export default Store;
