class Summary {
  constructor(root, props) {
    this.subtotal = props.subtotal;
    this.shipping_cost = props.shippingCost;
    this.total_tax = props.totalTax;
    this.total_cost = props.totalCost;
  }
}

export default Summary;
