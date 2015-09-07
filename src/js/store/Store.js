var Store = {

  state: {
    text: '',
    fontSize: 50,
    speed: '200'
  },

  saveText(text) {
    this.state.text = text;
  },

  saveFontSize(fontSize) {
    this.state.fontSize = fontSize;
    this.onChangeFont();
  },

  saveSpeed(nbPixel) {
    this.state.speed = nbPixel;
    this.onChangeSpeed();
  },

  getText() {
    return this.state.text;
  },

  getFontSize() {
    return this.state.fontSize;
  },

  getSpeed() {
    return this.state.speed;
  },

  onChangeFont() {},

  onChangeSpeed() {}

};

export default Store;
