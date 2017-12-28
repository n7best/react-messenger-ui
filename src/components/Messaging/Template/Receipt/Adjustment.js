class Adjustment {
  constructor(root, props) {
    this.name = props.name;
    this.amount = props.amount;
  }

  validate() {
    if (!this.name || !this.amount) throw new Error('both name and amount field is required for adjustment');
  }
}

export default Adjustment;
