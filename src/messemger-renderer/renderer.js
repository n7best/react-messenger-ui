/* eslint-disable no-param-reassign */
import Reconciler from 'react-reconciler';
import emptyObject from 'fbjs/lib/emptyObject';

import { createElement } from './createElement';

function log(...args) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...args);
  }
}

export const Renderer = Reconciler({
  appendInitialChild(parentInstance, child) {
    log('appendinitial', parentInstance, child, typeof child);
    if (typeof child === 'string') {
      log('invariant string');
      return;
    }
    parentInstance.appendChild(child);
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props, internalInstanceHandle);
  },

  createTextInstance(text) {
    return text;
  },

  finalizeInitialChildren() {
    return false;
  },

  getPublicInstance(inst) {
    return inst;
  },

  prepareForCommit(...rest) {
    log('prepareForCommit', rest);
    // noop
  },

  prepareUpdate(wordElement, type, oldProps, newProps) {
    log('prepareUpdate', wordElement, type, oldProps, newProps);
    return true;
  },

  resetAfterCommit(...rest) {
    log('resetAfterCommit', rest);
    // noop
  },

  resetTextContent(wordElement) {
    log('resetTextContent', wordElement);
    // noop
  },

  getRootHostContext(rootInstance) {
    log('getRootHostContext', rootInstance);
    // You can use this 'rootInstance' to pass data from the roots.
  },

  getChildHostContext(...rest) {
    log('getChildHostContext', rest);
    return emptyObject;
  },

  shouldSetTextContent(type, props) {
    log('shouldSetTextContent', type, props);
    return (
      type === 'Text' ||
      typeof props.children === 'string' ||
      typeof props.children === 'number'
    );
  },

  now: () => () => {
    log('now');
    // noop
  },


  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      log('mutation', parentInstance, child);
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    appendChildToContainer(parentInstance, child) {
      log('appendChildToContainer', parentInstance, child);
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child, parentInstance);
      } else {
        parentInstance.children = child;
      }
    },

    removeChild(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    removeChildFromContainer(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    insertBefore() {
      // noob
    },

    commitUpdate() {
      // noop
    },

    commitMount() {
      // noop
    },

    commitTextUpdate(textInstance, oldText, newText) {
      log('commitTextUpdate', textInstance, oldText, newText);
      textInstance.children = newText;
    }
  }
});
