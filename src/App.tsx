import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonDemo from './pages/ButtonDemo'
import CounterDemo from './pages/CounterDemo'
import CodeDemo from './pages/CodeDemo'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'button' | 'counter' | 'code'>('home');

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Poly UI in React</h1>
        <h2>The freedom to use the framework you love</h2>
      </header>

      <div className="app-layout">
        <nav className="side-nav">
          <button 
            className={currentPage === 'home' ? 'active' : ''} 
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            className={currentPage === 'button' ? 'active' : ''} 
            onClick={() => setCurrentPage('button')}
          >
            ui-button
          </button>
          <button 
            className={currentPage === 'counter' ? 'active' : ''} 
            onClick={() => setCurrentPage('counter')}
          >
            ui-counter
          </button>
          <button 
            className={currentPage === 'code' ? 'active' : ''} 
            onClick={() => setCurrentPage('code')}
          >
            ui-code-highlight
          </button>
        </nav>

        <main className="main-content">
          {currentPage === 'home' && (
            <div className="home-content">
              <section className="description-section">
                <h2>About This App</h2>
                <p>
                  This application serves as a comprehensive demonstration and testing environment 
                  for the <strong>Poly UI</strong> web component library. It showcases how 
                  custom elements can be seamlessly integrated into a modern React 19 application.
                </p>
                
                <h2>What is Poly UI?</h2>
                <p>
                  Poly UI is a versatile custom elements library built with Svelte but 
                  compiled to standard Web Components. This architecture allows the components 
                  to be used in any framework — React, Angular, Vue — or even in vanilla HTML/JS 
                  environments, providing a consistent UI experience across diverse platforms.
                </p>
              </section>
            </div>
          )}

          {currentPage === 'button' && <ButtonDemo />}
          {currentPage === 'counter' && <CounterDemo />}
          {currentPage === 'code' && <CodeDemo />}
        </main>
      </div>
    </div>
  )
}

export default App
