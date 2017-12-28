import { TEMPLATE_TYPE, MEDIA_TYPE } from '../../constants';
import Element from '../Element';
import { withButton } from '../../Button';

@withButton('element')
class MediaElement extends Element {
  constructor(root, props) {
    super(root, props);

    this.templateType = TEMPLATE_TYPE.MEDIA;

    this.type = props.type || MEDIA_TYPE.IMAGE;
    this.url = props.url;
    this.attachment_id = props.attachmentId;
    this.maxButtonLimit = 1;

    this.validate();
  }

  validate() {
    if (!this.url && !this.attachment_id) throw new Error('Must have url or attachment id');
    if (typeof this.url !== 'undefined' && typeof this.attachment_id !== 'undefined') throw new Error('Can not have both url and attachment id');
  }

  render() {
    return {
      media_type: this.type,
      url: this.url,
      attachment_id: this.attachment_id,
      buttons: this.buttons.length ? this.buttons : undefined
    };
  }
}

export default MediaElement;
