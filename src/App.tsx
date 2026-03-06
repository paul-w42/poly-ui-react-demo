import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ButtonDemo from './pages/ButtonDemo'
import CounterDemo from './pages/CounterDemo'

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'button' | 'counter'>('home');

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
        </nav>

        <main className="main-content" >
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
                  to be used in any framework—React, Angular, Vue—or even in vanilla HTML/JS 
                  environments, providing a consistent UI experience across diverse platforms.
                </p>
              </section>
{/* 
              <div className="tech-logos">
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div> */}
            </div>
          )}

          {currentPage === 'button' && <ButtonDemo />}
          {currentPage === 'counter' && <CounterDemo />}
        </main>
      </div>
    </div>
  )
}

export default App
