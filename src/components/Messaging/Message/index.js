import FormData from 'form-data';
import Recipient from './Recipient';
import { MESSAGING_TYPE, MAX_QUICK_REPLIES } from '../constants';

class Message {
  children = [];

  constructor(root, props) {
    if (!props.recipient) {
      throw new Error('Message must have recipient');
    }
    this.root = root;
    this.props = props;
    this.texts = [];
    this.attachment = null;
    this.type = props.type || MESSAGING_TYPE.RESPONSE;
    this.recipient = new Recipient(props.recipient);
    this.notificationType = props.notificationType || false;
    this.tag = props.tag || false;
    this.formData = null;
    this.quick_replies = [];
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children.splice(
      this.children.indexOf(child),
      1
    );
  }

  addText(text) {
    this.texts.push(text);
  }

  addAttachment(attachment) {
    this.attachment = attachment;
  }

  addQuickreply(quickreply) {
    this.quick_replies.push(quickreply);
    if (this.quick_replies.length > MAX_QUICK_REPLIES) throw new Error('Exceed max quickreplies allow');
  }

  useFormdata(formOptions = {}) {
    this.formData = new FormData(formOptions);

    return this.formData;
  }

  renderChildren() {
    this.children.forEach((child) => {
      if (typeof child === 'string') {
        this.texts.push(child);
      } else if (child.constructor.name === 'Text') {
        this.texts.push(child.render(this));
      } else {
        child.render(this);
      }
    });
  }

  removeEmpty(obj) {
    Object.keys(obj).forEach(key =>
      (obj[key] && typeof obj[key] === 'object') && this.removeEmpty(obj[key]) ||
      (obj[key] === undefined) && delete obj[key]); // eslint-disable-line
    return obj;
  }

  render() {
    this.renderChildren();

    let output;

    if (this.formData) {
      // handle upload method
      this.formData.append('recipient', JSON.stringify(this.recipient));
      if (this.quick_replies.length) {
        this.formData.append('message', JSON.stringify({
          attachment: this.attachment.attachment,
          quick_replies: this.quick_replies
        }));
      } else {
        this.formData.append('message', JSON.stringify({
          attachment: this.attachment.attachment
        }));
      }
      this.formData.append('filedata', this.attachment.filedata);

      output = this.formData;
    } else {
      // normal json object

      if (this.texts.length && this.attachment) {
        throw new Error('Message will only accept Text or Attachment, not both');
      }

      output = {
        messaging_type: this.type,
        recipient: this.recipient,
        message: {}
      };

      if (this.texts.length) output.message.text = this.texts.join('\n');
      if (this.attachment) output.message = this.attachment;
      if (this.quick_replies.length) output.message.quick_replies = this.quick_replies;
    }

    if (this.notificationType) output.notifciation_type = this.notificationType;

    // this.formData.append('recipient', this.recipient);
    /*
      Todo:
      implements:
      Supported Message Types
      Only generic template messages can be sent with tags other than ISSUE_RESOLUTION.
      ISSUE_RESOLUTION tag can be used with either generic template messages or text messages.

      ref: https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags
    */
    if (this.tag) output.tag = this.tag;


    // sanity the ouput
    if (!this.formData) this.removeEmpty(output);
    return output;
  }
}

export default Message;
