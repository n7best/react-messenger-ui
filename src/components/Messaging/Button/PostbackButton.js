import Button from './Button';
import { BUTTON_TYPE } from '../constants';

class PostbackButton extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.POSTBACK);

    if (typeof props.children === 'string') {
      this.title = props.children.trim();
    }

    this.payload = props.payload || false;

    if (!this.title) throw new Error('Button Must have title');
    if (this.title.length > 20) throw new Error('Title can not be more than 20 character');
    if (!this.payload) throw new Error('must provide payload');
  }
}

export default PostbackButton;
