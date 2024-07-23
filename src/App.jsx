import { useState } from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header';
function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdown = () => {
    if (isOpen)
      setIsOpen(false);
  } 

    return (
    <div className='container' onClick={closeDropdown}>
      <Header isLogged={isLogged} isOpen={isOpen} setIsOpen={setIsOpen}> </Header>
      <div className="main">lala</div>
      <div className="footer">lala</div>
    </div>
  )
}

export default App
