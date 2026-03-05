import { useState, useEffect } from 'react';
import Code from '../lib/Code';

const buttonCode = `
<ui-button 
  css='color: black; font-weight: bold; font-size: 1.1em; background-color: lightblue;'
  click-event='ButtonTestEvent'
>
  Press Me
</ui-button>
`;

export default function ButtonDemo() {
  const [buttonTestCount, setButtonTestCount] = useState(0);

  const handleButtonTestEvent = (event: Event) => {
    console.log('ButtonTestEvent triggered!', event);
    setButtonTestCount((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener('ButtonTestEvent', handleButtonTestEvent);
    return () => {
      document.removeEventListener('ButtonTestEvent', handleButtonTestEvent);
    };
  }, []);

  return (
    <div className="demo-page">
      <h1>ui-button Demo</h1>
      
      <section className="demo-section">
        <h2>Demonstration</h2>
        <ui-button 
          css='color: black; font-weight: bold; font-size: 1.1em; background-color: lightblue;'
          click-event='ButtonTestEvent'
        >
          Press Me
        </ui-button>
        <div className="buttonCounter m-top">Button clicked: {buttonTestCount} times</div>
      </section>

      <section className="demo-section m-top">
        <h2>Code Example</h2>
        <Code code={buttonCode} language="html" />
      </section>

      <section className="demo-section m-top">
        <h2>Documentation</h2>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>click-event</code></td>
              <td><code>string</code></td>
              <td>The name of the custom event to dispatch on click.</td>
            </tr>
            <tr>
              <td><code>css</code></td>
              <td><code>string</code></td>
              <td>Inline CSS styles to apply to the button.</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td><code>boolean</code></td>
              <td>Whether the button is disabled.</td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td><code>string</code></td>
              <td>Icon name or path.</td>
            </tr>
            <tr>
              <td><code>icon-position</code></td>
              <td><code>'left' | 'right' | 'iconOnly'</code></td>
              <td>Position of the icon relative to the label.</td>
            </tr>
            <tr>
              <td><code>label</code></td>
              <td><code>string</code></td>
              <td>Button label text.</td>
            </tr>
            <tr>
              <td><code>selected</code></td>
              <td><code>boolean</code></td>
              <td>Whether the button is in a selected state.</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td><code>'button' | 'submit' | 'reset'</code></td>
              <td>HTML button type.</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td><code>'default' | 'filled' | 'outline' | 'transparent'</code></td>
              <td>The visual variant of the button.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
