/* eslint-disable no-param-reassign */
import { QUICKREPLY_TYPE } from '../constants';
/*
  ref: https://developers.facebook.com/docs/messenger-platform/reference/send-api/quick-replies
*/
class QuickReply {
  constructor(root, props) {
    this.root = root;
    this.props = props;
    this.type = props.type || QUICKREPLY_TYPE.TEXT;
    this.payload = props.payload || false;
    this.image_url = props.image || false;
    this.title = props.title || '';

    if (this.type === QUICKREPLY_TYPE.TEXT && !props.title) throw new Error('Title is required for QuickReply');
    if (this.title.length > 20) throw new Error('Quickreply title can not be over 20 character');
    if (this.type === QUICKREPLY_TYPE.TEXT && !props.payload) throw new Error('Must provide a payload for Text quickreply');
  }

  appendChild() {
    // noop
  }

  removeChild() {
    // noop
  }

  render(Message) {
    /*
    Required if content_type is 'text'.
     Custom data that will be sent back to you via
     the messaging_postbacks webhook event. 1000 character limit.
    */
    const quickreply = {
      content_type: this.type
    }

    switch (this.type) {
      case QUICKREPLY_TYPE.TEXT:
        quickreply.title = this.title;
        quickreply.payload = this.payload;
        if (this.image_url) quickreply.image_url = this.image_url;

        Message.addQuickreply(quickreply);
        break;

      case QUICKREPLY_TYPE.LOCATION:
        Message.addQuickreply(quickreply);
        break;

      default:
        throw new Error('quickreply type is not valid');
    }
  }
}

export default QuickReply;
