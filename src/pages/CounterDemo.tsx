import Code from '../lib/Code';

const counterCode = `
<ui-counter start-count={10} step={5} />
`;

export default function CounterDemo() {
  return (
    <div className="demo-page">
      <h1>ui-counter Demo</h1>
      
      <section className="demo-section">
        <h2>Demonstration</h2>
        <ui-counter start-count={10} step={5} />
      </section>

      <section className="demo-section m-top">
        <h2>Code Example</h2>
        <Code code={counterCode} language="html" />
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
              <td><code>start-count</code></td>
              <td><code>number</code></td>
              <td>The initial value of the counter.</td>
            </tr>
            <tr>
              <td><code>step</code></td>
              <td><code>number</code></td>
              <td>The amount to increment/decrement the counter.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
