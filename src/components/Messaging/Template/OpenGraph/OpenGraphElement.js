import { TEMPLATE_TYPE } from '../../constants';
import Element from '../Element';
import { withButton } from '../../Button';

@withButton('element')
class OpenGraphElement extends Element {
  constructor(root, props) {
    super(root, props);

    this.templateType = TEMPLATE_TYPE.OPEN_GRAPH;

    this.url = props.url;
    this.maxButtonLimit = 3;

    this.validate();
  }

  validate() {
    if (!this.url) throw new Error('Must have url');
  }

  render() {
    return {
      url: this.url,
      buttons: this.buttons.length ? this.buttons : undefined
    };
  }
}

export default OpenGraphElement;
