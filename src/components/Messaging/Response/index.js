class Response {
  constructor() {
    this.children = false;
  }
  render() {
    return this.children.render();
  }
}

export default Response;
