import type * as React from 'react';

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      'ui-counter': any;
      'ui-button': any;
      'ui-code-highlight': any;
    }
  }
}

export {};
