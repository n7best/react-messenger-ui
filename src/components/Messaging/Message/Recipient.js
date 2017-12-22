/* eslint-disable object-curly-newline */

/*
  id: '<PSID>'

  Phone number: If you know a user's phone number, you can specify recipient.phone_number
  in the API request. This will send a message request to the recipient, without
  requiring them to interact with your page first. Sending messages to phone
  numbers requires the pages_messaging_phone_number permission. For more
  information, see Customer Matching.
*/

/*
  User Ref: For more information, see https://developers.facebook.com/docs/messenger-platform/discovery/checkbox-plugin.
*/
class Recipient {
  constructor({ id, phone_number, user_ref, name }) {
    if (!id && !phone_number && !user_ref) {
      throw new Error('Recipient must include one of id, phone_number, or user_ref.');
    }

    if (name && !phone_number) {
      console.warn('Recipient name should only use with phone_number');
    }

    this.id = id;
    this.phone_number = phone_number;
    this.user_ref = user_ref;
    this.name = name;
  }

  toObject() {
    const obj = {};

    if (this.id) obj.id = this.id;
    if (this.phone_number) obj.phone_number = this.phone_number;
    if (this.user_ref) obj.user_ref = this.user_ref;
    if (this.name) obj.name = this.name;

    return obj;
  }
}

export default Recipient;
