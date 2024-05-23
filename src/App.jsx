import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className='nav_mobile'>
        <div className='nav_mobile-toggle' onClick={()=> setIsMenuOpen(!isMenuOpen)}> Open menu</div>
        <div className={isMenuOpen ? 'nav_mobile-items menuActive' : 'nav_mobile-items'}>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Block</li>
            <li>Bir</li>
            <li>Iki</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
