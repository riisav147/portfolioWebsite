import react from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import About from './components/About.jsx';

function App(){
  return(
    <div>
      <NavBar/>
      <Home/>
      <About/>   

      <SocialLinks/>
    </div>
  )
}
export default App;