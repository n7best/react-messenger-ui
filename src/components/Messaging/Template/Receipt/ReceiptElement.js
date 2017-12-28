import { TEMPLATE_TYPE } from '../../constants';
import Element from '../Element';

class ReceiptElement extends Element {
  constructor(root, props) {
    super(root, props);

    this.templateType = TEMPLATE_TYPE.RECEIPT;

    this.title = props.title;
    this.subtitle = props.subtitle;
    this.quantity = props.quantity;
    this.price = props.price;
    this.currency = props.currency;
    this.image_url = props.imageUrl;

    this.validate();
  }

  validate() {
    if (!this.title && !this.price) throw new Error('Must have titel of price');
  }

  render() {
    return {
      title: this.title,
      subtitle: this.subtitle,
      quantity: this.quantity,
      price: this.price,
      currency: this.currency,
      image_url: this.image_url
    };
  }
}

export default ReceiptElement;
