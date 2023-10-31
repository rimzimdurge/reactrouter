
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import Error from './components/pages/Error';
import Post from './components/pages/Post';

function App() {
  return (
    
      <> 
          
         <Router>
           <Navbar/>
            
                <Routes>
                
                  <Route  path='/' element={<Home />}/>
                  <Route   path='/about' element={<About />}/>
                  <Route  path='/contact'  element={<Contact />}/>
                  <Route  path='/post/:category'  Component={Post}/>

                  <Route path='*' element={<Error />}/>

                </Routes>
           
           
         </Router>
     </>
  );
}

export default App;
