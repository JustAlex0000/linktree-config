import { useState } from 'react'
import './App.css'
import config from './config.json'
import LinkButton from './components/LinkButton'

function App() {
  return (
      <main>
        <h1>{config.title}</h1>
        <nav className="links">
          {config.links.map((link) => (
            <LinkButton 
              key={link.id} 
              label={link.label} 
              url={link.url} />
          ))}
        </nav>
      </main>
  )
}

export default App
