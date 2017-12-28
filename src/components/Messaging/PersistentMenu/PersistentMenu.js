class PersistentMenu {
  children = [];

  appendChild(child) {
    if (child.constructor.name === 'MenuWithButton') {
      this.children.push(child);
    }
  }

  render() {
    return {
      persistent_menu: this.children.map(child => child.render())
    };
  }
}

export default PersistentMenu;
