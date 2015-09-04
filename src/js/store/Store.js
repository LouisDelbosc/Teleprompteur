var Store = {

  state: {
    text: '',
    fontSize: 50
  },

  saveText(text) {
    this.state.text = text;
  },

  saveFontSize(fontSize) {
    this.state.fontSize = fontSize;
    console.log('save fs');
    this.onChange();
  },

  getText() {
    return this.state.text;
  },

  getFontSize() {
    return this.state.fontSize;
  },

  onChange() {}

};

export default Store;
