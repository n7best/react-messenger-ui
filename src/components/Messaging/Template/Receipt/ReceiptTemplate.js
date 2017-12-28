/* eslint-disable no-param-reassign */
import { TEMPLATE_TYPE } from '../../constants';
import Address from './Address';
import Summary from './Summary';
import Adjustment from './Adjustment';
import ReceiptElement from './ReceiptElement';
import Template from '../Template';

class ReceiptTemplate extends Template {
  constructor(root, props) {
    super(root, {
      type: TEMPLATE_TYPE.RECEIPT,
      children: props.children
    });

    this.sharable = props.sharable;
    this.recipient_name = props.recipientName;
    this.merchant_name = props.merchantName;
    this.order_number = props.orderNumber;
    this.currency = props.currency || 'USD';
    this.payment_method = props.paymentMethod;
    this.timestamp = props.timestamp;

    this.maxElementLimit = 100;
    this.elements = [];
    this.adjustments = [];

    this.validate();
  }

  validate() {
    if (!this.recipient_name || !this.order_number || !this.currency || !this.payment_method) throw new Error('Missing requirepment from receipt template');
  }

  addElement(element) {
    switch (true) {
      case element instanceof ReceiptElement:
        this.elements.push(element);

        if (this.elements.length > this.maxElementLimit) {
          throw new Error('Exceed max element allow for Generic Template');
        }
        break;

      case element instanceof Address:
        this.address = element;
        break;

      case element instanceof Summary:
        this.summary = element;
        break;

      case element instanceof Adjustment:
        this.adjustments.push(element);
        break;

      default:
        break;
    }
  }

  renderTemplate() {
    return Object.assign({}, this.template, {
      sharable: this.sharable,
      recipient_name: this.recipient_name,
      merchant_name: this.merchant_name,
      order_number: this.order_number,
      currency: this.currency,
      payment_method: this.payment_method,
      timestamp: this.timestamp,
      address: this.address,
      summary: this.summary,
      adjustments: this.adjustments.length ? this.adjustments : undefined,
      elements: this.elements.map(element => element.render())
    });
  }

  appendChild(child) {
    // pass to withbutton it will filter by itself
    if (this.addButton) this.addButton(child);
    this.addElement(child);
  }
}

export default ReceiptTemplate;
