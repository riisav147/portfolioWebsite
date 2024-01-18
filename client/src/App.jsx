import react from 'react';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import SocialLinks from './components/SocialLinks.jsx';

function App(){
  return(
    <div>
      <NavBar/>
      <Home/>

      <SocialLinks/>
    </div>
  )
}
export default App;