/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from "react";
import { useColorMode } from "theme-ui";
import { Routes, Route } from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {

  const [ colorMode, setColorMode ] = useColorMode();
  const [ url, setUrl ] = useState("None")
  
  useEffect( () => {
        setUrl( window.location.href )
        const checkForColorMode = () => {
            if ( url === "http://localhost:3000/about" || url === "https://jordanholm.netlify.app/about") {
                setColorMode(colorMode === 'light')
                console.log(url)
            } else {
                setColorMode(colorMode === 'dark')
            }
        }
        checkForColorMode()
    }, [])
  
  return (
    <>

      <MainNavbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> }/>
        <Route path='/*' element={ <Nomatch /> } />
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App;
