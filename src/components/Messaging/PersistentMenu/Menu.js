import { LOCALES } from '../constants';
import withButton from '../Button/withButton';

@withButton('menu')
class Menu {
  constructor(root, props) {
    this.locale = props.locale || 'default';
    this.composer_input_disabled = props.composerInputDisabled;
    this.maxButtonLimit = 3;
  }

  appendChild(child) {
    if (this.addButton) this.addButton(child);
  }

  validate() {
    if (this.composer_input_disabled && !this.call_to_actions.length) throw new Error('must provide menu item when composer input is disabled');
    if (LOCALES.indexOf(this.locale) === -1) throw new Error('The locale you provide is not supported, check: https://developers.facebook.com/docs/messenger-platform/messenger-profile/supported-locales');
  }

  render() {
    this.validate();

    return {
      locale: this.locale,
      composer_input_disabled: this.composer_input_disabled,
      call_to_actions: this.call_to_actions
    };
  }
}

export default Menu;
