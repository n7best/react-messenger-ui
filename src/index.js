import { render } from './messemger-renderer/render';
import CONSTANTS from './components/Messaging/constants';

const version = '0.0.2';
const Text = 'TEXT';
const Message = 'MESSAGE';
const SenderAction = 'SENDERACTION';
const Attachment = 'ATTACHMENT';
const QuickReply = 'QUICKREPLY';
const Button = 'BUTTON';
const URLButton = 'URLBUTTON';
const Template = 'TEMPLATE';
const ButtonTemplate = 'BUTTONTEMPLATE';

export {
  render,
  Text,
  Message,
  SenderAction,
  Attachment,
  QuickReply,
  Button,
  URLButton,
  Template,
  ButtonTemplate,
  CONSTANTS,
  version
};
