import Button from './Button';
import { BUTTON_TYPE } from '../constants';

class LogoutButton extends Button {
  constructor() {
    super(BUTTON_TYPE.LOG_OUT);
  }
}

export default LogoutButton;
