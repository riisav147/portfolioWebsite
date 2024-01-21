import react from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';

function App(){
  return(
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>   

      <SocialLinks/>
    </div>
  )
}
export default App;