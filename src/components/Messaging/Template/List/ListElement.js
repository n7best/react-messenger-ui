import { TEMPLATE_TYPE } from '../../constants';
import Element from '../Element';
import { withButton } from '../../Button';

@withButton('element')
class ListElement extends Element {
  constructor(root, props) {
    super(root, props);

    this.templateType = TEMPLATE_TYPE.LIST;
    this.title = props.title;
    this.subtitle = props.subtitle;
    this.image_url = props.imageUrl;
    this.default_action = props.defaultAction;
    this.maxButtonLimit = 1;

    this.validate();
  }

  validate() {
    if (!this.title) throw new Error('Generic element must have title');
    if (this.title && this.title.length > 80) throw new Error('title is over 80 character limit');
    if (this.subtitle && this.subtitle.length > 80) throw new Error('subtitle is over 80 character limit');
  }

  render() {
    let defaultAction = null;
    if (this.default_action) {
      const { title, ...others } = this.default_action;
      defaultAction = others;
    }
    return {
      title: this.title,
      subtitle: this.subtitle,
      image_url: this.image_url,
      default_action: defaultAction || undefined,
      buttons: this.buttons
    };
  }
}

export default ListElement;
