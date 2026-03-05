import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonDemo from './pages/ButtonDemo'
import CounterDemo from './pages/CounterDemo'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'button' | 'counter'>('home');

  return (
    <div className="app-container">
      <nav className="main-nav">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('button')}>ui-button Demo</button>
        <button onClick={() => setCurrentPage('counter')}>ui-counter Demo</button>
      </nav>

      {currentPage === 'home' && (
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Poly UI Demo App</h1>
          <p>Select a component demo from the navigation above.</p>
        </>
      )}

      {currentPage === 'button' && <ButtonDemo />}
      {currentPage === 'counter' && <CounterDemo />}
    </div>
  )
}

export default App
