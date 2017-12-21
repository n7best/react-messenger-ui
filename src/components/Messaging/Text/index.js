class Text {
  constructor(root, props) {
    this.root = root;
    this.props = props;
  }

  render() {
    return this.props.children;
  }
}

export default Text;
