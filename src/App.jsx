import { useEffect, useState } from 'react'
import NavBar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Formations from './components/Formations';
import Contact from './components/Contact';
import {BsFillArrowUpCircleFill} from "react-icons/bs"
import './style.css'

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  console.log(showArrow)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 400){
        setShowArrow(true);
      } else{
        setShowArrow(false);
      }
    })
  },[])

  function goToTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  const styles = {
    color: darkMode === true ? '#e8e8e8': '#212121'
}

  return (
    <div className='app' style={darkMode === false ? {backgroundColor:'white',color:'#212121'}: {backgroundColor:'#212121', color:'#e8e8e8'}}>
      {showArrow && (<BsFillArrowUpCircleFill onClick={goToTop} id="arrowUp" style={styles}/>)}
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <About darkMode={darkMode}/>
      <Projects darkMode={darkMode} />
      <Skills/>
      <Formations darkMode={darkMode} />
      <Contact darkMode={darkMode}/>
    </div>
    
  )
    
}

export default App
