# React + TypeScript + Vite

This is a sample React 19 application created using Vite for the purposes of both testing and demoing the poly-ui web element library.

Noted below are the changes we effected to use the custom element library, including those required to use the library w/o any linting errors. I am sure there are better ways to configure this, and we would welcome any improvements.

## Using the poly-ui library

To use the **poly-ui** library, simply install it via npm and then add an import for the library someone at a high level in your application, i.e. inside your **main.tsx** file.

In addition, add a **poly-ui.d.ts** file in the `src/` directory with the following content:

```ts
  /// <reference types="poly-ui/types" />
```

## Edits to the default configuration to use the poly-ui library

- tsconfig.node.json - added **`"composite": true,`** to the file

- tsconfig.app.json - added **`"composite": true,`** to the file

- added a file **`poly-ui.d.ts`** to the **`src/`** directory
**`/// <reference types="poly-ui/types" />`**

- added an import for the library to the **`src/main.tsx`** file, **`import 'poly-ui'`**

- To use the sample **Counter** component from the **poly-ui** library, we just had to include it in our return block of the **App.tsx** page as it had already been imported into our app above inside **main.tsx**.  **`<ui-counter />`**



