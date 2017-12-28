class Address {
  constructor(root, props) {
    this.street_1 = props.street1;
    this.street_2 = props.street2;
    this.city = props.city;
    this.postal_code = props.postalCode;
    this.state = props.state;
    this.country = props.country;

    this.validate();
  }

  validate() {
    if (!this.street_1 || !this.city || !this.postal_code || !this.country || !this.state) throw new Error('Please fill all requirement for address');
  }
}

export default Address;
