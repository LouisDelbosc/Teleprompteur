var Store = {

  state: {
    text: '',
    fontSize: 50,
    pixelScroll: '200'
  },

  saveText(text) {
    this.state.text = text;
  },

  saveFontSize(fontSize) {
    this.state.fontSize = fontSize;
    this.onChange();
  },

  savePixelScroll(nbPixel) {
    this.state.pixelScroll = nbPixel;
    this.onChange();
  },

  getText() {
    return this.state.text;
  },

  getFontSize() {
    return this.state.fontSize;
  },

  getPixelScroll() {
    return this.state.pixelScroll;
  },

  onChange() {}

};

export default Store;
