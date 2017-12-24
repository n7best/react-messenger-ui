/* eslint-disable no-param-reassign */
import { ATTACHMENT_TYPE, ATTACHMENT_SOURCE } from '../constants';

class Attachment {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.type = props.type || ATTACHMENT_TYPE.IMAGE;
    this.source = props.source || ATTACHMENT_SOURCE.URL;
    this.reusable = typeof props.reusable === 'boolean' ? props.reusable : true;
    this.url = props.url || false;
    this.attachment_id = props.attachment_id || false;
    this.file = props.file || false;
    this.template = null;
  }

  appendChild() {
    // noop
  }

  removeChild() {
    // noop
  }

  render(Message) {
    const attachment = {
      type: this.type,
      payload: {}
    };

    // Todo: validation attachment type
    if (this.type === ATTACHMENT_TYPE.TEMPLATE) {
      attachment.payload = this.renderTemplate();
    } else {
      switch (this.source) {
        case ATTACHMENT_SOURCE.URL:
          if (!this.url) throw new Error('Must provide url for attachment');
          attachment.payload = {
            url: this.url,
            is_reusable: this.reusable
          };
          break;
        case ATTACHMENT_SOURCE.FILE:
          if (!this.file) throw new Error('Must provide file for attachment');
          Message.useFormdata();
          attachment.payload = {
            is_reusable: this.reusable
          };
          attachment.filedata = this.file;
          break;
        case ATTACHMENT_SOURCE.SAVED_ASSET:
          if (!this.attachment_id) throw new Error('Must provide attachment_id for attachment');
          attachment.payload = {
            attachment_id: this.attachment_id
          };
          break;
        default:
          throw new Error('Source type is not valid');
      }
    }

    Message.addAttachment(attachment);
  }
}

export default Attachment;
