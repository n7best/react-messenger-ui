class Button {
  constructor(type) {
    if (!type) throw new Error('Please do not directly use Button Component');
    this.type = type;
  }

  appendChild() {
    // noop
  }

  removeChild() {
    // noop
  }

  render() {
    return this;
  }
}

export default Button;
