import { render } from './messemger-renderer/render';
import CONSTANTS from './components/Messaging/constants';

export const version = '0.0.16';
export const Text = 'TEXT';
export const Message = 'MESSAGE';
export const SenderAction = 'SENDERACTION';
export const Attachment = 'ATTACHMENT';
export const QuickReply = 'QUICKREPLY';
export const Button = 'BUTTON';
export const URLButton = 'URLBUTTON';
export const PostbackButton = 'POSTBACKBUTTON';
export const ShareButton = 'SHAREBUTTON';
export const CallButton = 'CALLBUTTON';
export const LoginButton = 'LOGINBUTTON';
export const LogoutButton = 'LOGOUTBUTTON';
export const GameplayButton = 'GAMEPLAYBUTTON';
export const Template = 'TEMPLATE';
export const Element = 'ELEMENT';
export const GenericElement = 'GENERICELEMENT';
export const ButtonTemplate = 'BUTTONTEMPLATE';
export const GenericTemplate = 'GENERICTEMPLATE';
export const ListTemplate = 'LISTTEMPLATE';
export const ListElement = 'LISTELEMENT';
export const MediaTemplate = 'MEDIATEMPLATE';
export const MediaElement = 'MEDIAELEMENT';
export const Address = 'ADDRESS';
export const Adjustment = 'ADJUSTMENT';
export const Summary = 'SUMMARY';
export const ReceiptTemplate = 'RECEIPTTEMPLATE';
export const ReceiptElement = 'RECEIPTELEMENT';
export const OpenGraphTemplate = 'OPENGRAPHTEMPLATE';
export const OpenGraphElement = 'OPENGRAPHELEMENT';
export const PersistentMenu = 'PERSISTENTMENU';
export const Menu = 'MENU';
export const NestedMenu = 'NESTEDMENU';
export {
  render,
  CONSTANTS
};

const MessengerUI = {
  render,
  Text,
  Message,
  SenderAction,
  Attachment,
  QuickReply,
  Button,
  URLButton,
  PostbackButton,
  ShareButton,
  CallButton,
  LoginButton,
  LogoutButton,
  GameplayButton,
  Template,
  Element,
  GenericElement,
  ButtonTemplate,
  GenericTemplate,
  ListTemplate,
  ListElement,
  MediaTemplate,
  MediaElement,
  Address,
  Adjustment,
  ReceiptElement,
  ReceiptTemplate,
  Summary,
  OpenGraphTemplate,
  OpenGraphElement,
  PersistentMenu,
  Menu,
  NestedMenu,
  CONSTANTS,
  version
};

export default MessengerUI;
