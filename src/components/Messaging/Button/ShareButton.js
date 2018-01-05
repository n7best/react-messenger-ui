import Button from './Button';
import { BUTTON_TYPE } from '../constants';

class ShareButton extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.SHARE);

    if (typeof props.children === 'string') {
      this.title = props.children.trim();
    }

    if (!this.title) throw new Error('Button Must have title');
    if (this.title.length > 20) throw new Error('Title can not be more than 20 character');

    // Todo: implement share contents property
  }
}

export default ShareButton;
