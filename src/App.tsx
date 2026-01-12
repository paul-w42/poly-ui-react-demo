import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h1>Poly UI Counter</h1>
      {/* step and start-count are both optional ... */}
      <ui-counter />
      
      <ui-button 
        css='color: black; font-weight: bold; font-size: 1.1em; background-color: lightblue; margin-left: 2em;'
        // label='press me'
        >TEST
      </ui-button>

    </>
  )
}

export default App
