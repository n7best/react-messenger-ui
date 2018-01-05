import Button from './Button';
import { BUTTON_TYPE, WEBVIEW_HEIGHT_RATIO } from '../constants';

class URLButton extends Button {
  constructor(root, props) {
    super(BUTTON_TYPE.URL);

    if (typeof props.children === 'string') {
      this.title = props.children.trim();
    }

    this.url = props.url || false;
    this.webview_height_ratio = props.webviewHeightRatio || undefined;
    this.messenger_extensions = props.messengerExtensions || undefined;
    this.fallback_url = props.fallbackUrl || undefined;
    this.webview_share_button = props.webviewShareButton || undefined;

    if (!this.title) throw new Error('Button Must have title');
    if (this.title.length > 20) throw new Error('Title can not be more than 20 character');
    if (!this.url) throw new Error('must provide url');
    if (this.webview_height_ratio
    && Object.keys(WEBVIEW_HEIGHT_RATIO).map(key => WEBVIEW_HEIGHT_RATIO[key]).indexOf(this.webview_height_ratio) > -1) {
      throw new Error('webview_height_ratio value not valid');
    }
  }
}

export default URLButton;
