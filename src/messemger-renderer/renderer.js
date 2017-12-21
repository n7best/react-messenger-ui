import Reconciler from 'react-reconciler';
import emptyObject from 'fbjs/lib/emptyObject';

import { createElement } from './createElement';

export const Renderer = Reconciler({
  appendInitialChild(parentInstance, child) {
    console.log('appendinitial', parentInstance, child, typeof child);
    if(typeof child === 'string'){
      console.log('invariant string')
      return;
    }
    parentInstance.appendChild(child);
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props, internalInstanceHandle);
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },

  finalizeInitialChildren(wordElement, type, props) {
    return false;
  },

  getPublicInstance(inst) {
    return inst;
  },

  prepareForCommit(...rest) {
    console.log('prepareForCommit', rest);
    // noop
  },

  prepareUpdate(wordElement, type, oldProps, newProps) {
    console.log('prepareUpdate', wordElement, type, oldProps, newProps);
    return true;
  },

  resetAfterCommit(...rest) {
    console.log('resetAfterCommit', rest);
    // noop
  },

  resetTextContent(wordElement) {
    console.log('resetTextContent', wordElement);
    // noop
  },

  getRootHostContext(rootInstance) {
    console.log('getRootHostContext', rootInstance);
    // You can use this 'rootInstance' to pass data from the roots.
  },

  getChildHostContext(...rest) {
    console.log('getChildHostContext', rest);
    return emptyObject;
  },

  shouldSetTextContent(type, props) {
    console.log('shouldSetTextContent', type, props);
    return (
      type === 'Text' ||
      typeof props.children === 'string' ||
      typeof props.children === 'number'
    );
  },

  now: () => () => {
    console.log('now');
    // noop
  },


  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      console.log('mutation', parentInstance, child);
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      } else {
        parentInstance.document = child;
      }
    },

    appendChildToContainer(parentInstance, child) {
      console.log('appendChildToContainer', parentInstance, child);
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

    insertBefore(parentInstance, child, beforeChild) {
      // noob
    },

    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
      // noop
    },

    commitMount(instance, updatePayload, type, oldProps, newProps) {
      // noop
    },

    commitTextUpdate(textInstance, oldText, newText) {
      console.log('commitTextUpdate', textInstance, oldText, newText);
      textInstance.children = newText;
    },
  }
})
