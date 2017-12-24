import Button from './Button';
import { BUTTON_TYPE } from '../constants';

class LoginButton extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.LOG_IN);

    this.url = props.url || false;
    if (!this.url) throw new Error('must provide url');
  }
}

export default LoginButton;
