import { Button, withButton } from '../Button';
import { BUTTON_TYPE } from '../constants';

@withButton('menu')
class NestedMenu extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.NESTED_MENU);

    this.title = props.title;
    if (typeof props.children === 'string') {
      this.title = this.title + props.children;
    }
    this.maxButtonLimit = 3;

    if (!this.title) throw new Error('Button Must have title');
    if (this.title.length > 20) throw new Error('Title can not be more than 20 character');
  }

  appendChild(child) {
    if (this.addButton) this.addButton(child);
  }

  render() {
    return {
      title: this.title,
      type: this.type,
      call_to_actions: this.call_to_actions
    };
  }
}

export default NestedMenu;
