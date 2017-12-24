import Button from './Button';
import { BUTTON_TYPE } from '../constants';

class GameplayButton extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.GAME_PLAY);

    if (typeof props.children === 'string') {
      this.title = props.children;
    }

    this.payload = props.payload || false;
    this.game_metadata = props.gameMetadata || false;

    if (!this.title) throw new Error('Button Must have title');
    if (this.title.length > 20) throw new Error('Title can not be more than 20 character');
    if (!this.payload) throw new Error('must provide payload');

    this.payload = JSON.stringify(this.payload);
  }
}

export default GameplayButton;
