import React from 'react';
import FormData from 'form-data';
import { fs } from 'memfs';
import { render, Message, Attachment, CONSTANTS } from '../src';

beforeAll(() => {
  fs.writeFileSync('/hello.jpg', 'IMAGE_DATA');

  // avoid random boundry
  FormData.prototype._generateBoundary = function () {
    var boundary = '--------------------------';
    this._boundary = boundary;
  };
});

test('should render image with url attachment and reusable on by default', () => {
  const link = 'Magic Link';
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment url={link} />
    </Message>
  )

  expect(render(<App />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '<PSID>' },
      message: {
        attachment: {
          type: 'image',
          payload: {
            url: link,
            is_reusable: true
          }
        }
      }
    }
  );
});

test('should render formdata with file', async () => {
  const file = fs.readFileSync('/hello.jpg', 'utf8')
  const expectFormData = new FormData();
  expectFormData.append('recipient', JSON.stringify({ id: '<PSID>' }));
  expectFormData.append('message', JSON.stringify({
    attachment: {
      type: 'audio',
      payload: {
        is_reusable: true
      }
    }
  }));
  expectFormData.append('filedata', file);

  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment
        file={file}
        type={CONSTANTS.ATTACHMENT_TYPE.AUDIO}
        source={CONSTANTS.ATTACHMENT_SOURCE.FILE} />
    </Message>
  )

  expect(JSON.stringify(render(<App />))).toEqual(JSON.stringify(expectFormData));
});

test('should render type video with attachment id', () => {
  const attachment_id = 'Magic ID';
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment
        attachment_id={attachment_id}
        type={CONSTANTS.ATTACHMENT_TYPE.VIDEO}
        source={CONSTANTS.ATTACHMENT_SOURCE.SAVED_ASSET} />
    </Message>
  )

  expect(render(<App />)).toEqual(
    {
      messaging_type: 'RESPONSE',
      recipient: { id: '<PSID>' },
      message: {
        attachment: {
          type: 'video',
          payload: {
            attachment_id,
          }
        }
      }
    }
  );
});

test('should render all types with url attachment and disalbe reusable', () => {

  Object.keys(CONSTANTS.ATTACHMENT_TYPE).forEach( attachmentType => {
    const link = 'Magic Link';
    const App = () => (
      <Message recipient={{ id: '<PSID>' }}>
        <Attachment type={attachmentType} url={link} reusable={false} />
      </Message>
    )

    expect(render(<App />)).toEqual(
      {
        messaging_type: 'RESPONSE',
        recipient: { id: '<PSID>' },
        message: {
          attachment: {
            type: attachmentType,
            payload: {
              url: link,
              is_reusable: false
            }
          }
        }
      }
    );
  })

});

test('should throw without provide url', () => {
  const link = 'Magic Link';
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment />
    </Message>
  )

  expect(()=>render(<App />)).toThrow('Must provide url for attachment')
});

test('should throw without provide file', () => {
  const link = 'Magic Link';
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment source={CONSTANTS.ATTACHMENT_SOURCE.FILE}/>
    </Message>
  )

  expect(() => render(<App />)).toThrow('Must provide file for attachment')
});

test('should throw without provide attachment_id', () => {
  const link = 'Magic Link';
  const App = () => (
    <Message recipient={{ id: '<PSID>' }}>
      <Attachment source={CONSTANTS.ATTACHMENT_SOURCE.SAVED_ASSET} />
    </Message>
  )

  expect(() => render(<App />)).toThrow('Must provide attachment_id for attachment')
});
