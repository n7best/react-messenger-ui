import React from 'react';
import { render, PersistentMenu, NestedMenu, Menu, URLButton, PostbackButton } from '../src';

test('should render persistent menu', () => {
  const App = () => (
    <PersistentMenu>
      <Menu>
        <URLButton url="magic link">
          world
      </URLButton>
        <PostbackButton payload="magic payload">
          world
      </PostbackButton>
        <NestedMenu title="More">
          <URLButton url="magic link">
            world
        </URLButton>
          <PostbackButton payload="magic payload">
            world
        </PostbackButton>
        </NestedMenu>
      </Menu>
      <Menu locale="zh_CN">
        <URLButton url="magic link">
          world
      </URLButton>
        <PostbackButton payload="magic payload">
          world
      </PostbackButton>
        <NestedMenu title="More">
          <URLButton url="magic link">
            world
        </URLButton>
          <PostbackButton payload="magic payload">
            world
        </PostbackButton>
        </NestedMenu>
      </Menu>
    </PersistentMenu>
  )

  expect(render(<App />)).toMatchSnapshot();
})
