class Element {
  appendChild(child) {
    // pass to withbutton it will filter by itself
    if (this.addButton) this.addButton(child);
  }

  render() {
  }
}

export default Element;
