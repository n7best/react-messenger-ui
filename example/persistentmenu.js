import React from 'react';
import { render, PersistentMenu, NestedMenu, Menu, URLButton, PostbackButton } from '../src';

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
);

console.log('output', JSON.stringify(render(<App />), null, 4));
