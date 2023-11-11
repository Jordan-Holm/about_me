import { Routes, Route } from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  
  return (
    <>

      <MainNavbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> }/>
        <Route path='/portfolio' element={ <Portfolio /> }/>
        <Route path='/*' element={ <Nomatch /> } />
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App;
