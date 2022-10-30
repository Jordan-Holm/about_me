import { Routes, Route } from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => (
  <>

    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/contact' element={ <Contact /> }/>
      <Route path='/*' element={ <Nomatch /> } />
    </Routes>
    {/* <Home /> */}
  </>
)

export default App;
