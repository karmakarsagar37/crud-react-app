import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/users/add' element={<AddUser/>}/>
            <Route path='/users/edit/:id' element={<EditUser/>}/>
            <Route exact path="/users/:id" element={<User/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
