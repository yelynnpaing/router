
import './App.css';
import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Error from './component/Error';
import Admin from "./component/Admin";
import One from "./component/One";
import Two from "./component/Two";
import Three from "./component/Three";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './component/Nav';


const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element=
            {<Services/>} >
          <Route index={true} element = {<One/>} />
          <Route path='two' element = {<Two/>} />
          <Route path='three' element = {<Three/>} />
        </Route>
          <Route path='/contact/:id' element={<Contact/>}/>
          <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element= {<Error/>} />
      </Routes>
    </Router>

  )
}

export default App