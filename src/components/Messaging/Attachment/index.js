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
  }

  appendChild() {
    // noop
  }

  removeChild() {
    // noop
  }

  render(Message) {
    // Todo: validation attachment type
    switch (this.source) {
      case ATTACHMENT_SOURCE.URL:
        if (!this.url) throw new Error('Must provide url for attachment');
        return Message.addAttachment({
          attachment: {
            type: this.type,
            payload: {
              url: this.url,
              is_reusable: this.reusable
            }
          }
        });
      case ATTACHMENT_SOURCE.FILE:
        if (!this.file) throw new Error('Must provide file for attachment');
        Message.useFormdata();
        return Message.addAttachment({
          attachment: {
            type: this.type,
            payload: {
              is_reusable: this.reusable
            }
          },
          filedata: this.file
        });
      case ATTACHMENT_SOURCE.SAVED_ASSET:
        if (!this.attachment_id) throw new Error('Must provide attachment_id for attachment');
        return Message.addAttachment({
          attachment: {
            type: this.type,
            payload: {
              attachment_id: this.attachment_id
            }
          }
        });
      default:
        throw new Error('Source type is not valid');
    }
  }
}

export default Attachment;
