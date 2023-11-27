import { Routes, Route } from 'react-router-dom';
import MainNavbar from './components/shared/MainNavbar';
import Nomatch from './components/shared/Nomatch';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

import CoinThief from './components/games/CoinThief';
import KnightlyRaid from './components/games/KnightlyRaid';

const App = () => {

  

  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> }/>
        <Route path='/portfolio' element={ <Portfolio /> }/>
        <Route path='/CoinThief' element={ <CoinThief /> } />
        <Route path='/KnightlyRaid' element={ <KnightlyRaid /> } />
        <Route path='/*' element={ <Nomatch /> } />
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App;
