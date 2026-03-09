import Code from '../lib/Code';

const demonstrationCode = `// Fibonacci Sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`;

const usageCode = `
const sampleCode = \'
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\'

// ... somewhere farther down ... 

<ui-code-highlight language="tsx">
  {sampleCode}
</ui-code-highlight>
`;

export default function CodeDemo() {
  return (
    <div className="demo-page">
      <h1>ui-code-highlight Demo</h1>
      
      <section className="demo-section">
        <h2>Demonstration</h2>
        <ui-code-highlight 
          language="typescript" 
          // theme="okaidia"
        >
          {demonstrationCode}
        </ui-code-highlight>
      </section>

      <section className="demo-section m-top">
        <h2>Code Example</h2>
        <ui-code-highlight theme='default' language='tsx'>{usageCode}</ui-code-highlight>
        {/* <Code code={usageCode} language="html" /> */}
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
              <td><code>language</code></td>
              <td><code>string</code></td>
              <td>The programming language for syntax highlighting (e.g., "javascript", "css", "html").</td>
            </tr>
            <tr>
              <td><code>theme</code></td>
              <td><code>string</code></td>
              <td>The name of the CSS theme to be applied to the highlighted code.</td>
            </tr>
            <tr>
              <td><code>css</code></td>
              <td><code>string</code></td>
              <td>Custom CSS styles to be applied directly to the component.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
