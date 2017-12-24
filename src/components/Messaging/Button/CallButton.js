import Button from './Button';
import { BUTTON_TYPE } from '../constants';

class CallButton extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.CALL);

    if (typeof props.children === 'string') {
      this.title = props.children;
    }

    this.payload = props.payload || false;

    if (!this.title) throw new Error('Button Must have title');
    if (this.title.length > 20) throw new Error('Title can not be more than 20 character');
    if (!this.payload) throw new Error('must provide payload');
    if (this.payload.charAt(0) !== '+') throw new Error('phone number must have prefix +');
  }
}

export default CallButton;
