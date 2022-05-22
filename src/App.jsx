import { useState } from 'react'
import NavBar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import './style.css'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='app' style={darkMode === false ? {backgroundColor:'white'}: {backgroundColor:'#212121', color:'#e8e8e8'}}>
      <NavBar/>
      <About darkMode={darkMode}/>
      <Projects/>
    </div>
    
  )
    
}

export default App
