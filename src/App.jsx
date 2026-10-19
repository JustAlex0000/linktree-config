import { useState } from 'react'
import './App.css'
import config from './config.json'
import LinkButton from './components/LinkButton'

function App() {
  return (
      <main
        className="link-page"
        style={{
          "--primary-color": config.theme.primaryColor,
          "--secondary-color": config.theme.secondaryColor,
          "--background-color": config.theme.backgroundColor,
          "--text-color": config.theme.textColor,
          "--button-color": config.theme.buttonColor,
          "--font-family": config.theme.fontFamily,
        }}
      >
        <img src={config.profile.avatar} alt={config.profile.name} className="profile-avatar" />
        <h1>{config.title}</h1>
        <p>{config.profile.bio}</p>
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
