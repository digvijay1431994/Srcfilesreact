import React from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './website/Pages/Home';
import About from './website/Pages/About';
import Gallery from './website/Pages/Gallery';
import Contact from './website/Pages/Contact';

import Product from './website/Pages/Product';
import Service from './website/Pages/Service';

import Admin_login from './Admin/Pages/Admin_login';
import Dashboard from './Admin/Pages/Dashboard';

import Add_Services from './Admin/Pages/Add_Services';
import Manage_services from './Admin/Pages/Manage_services';
import Add_Blog from './Admin/Pages/Add_Blog';
import Manage_Blog from './Admin/Pages/Manage_Blog';
import Manage_contact from './Admin/Pages/Manage_contact';
import Manage_customer from './Admin/Pages/Manage_customer';
import Login from './website/Pages/Login';
// import Manage_Categories from './Admin/Pages/Manage_categories';
import Manage_Categories from './Admin/Pages/Manage_Categories';
import Add_Categories from './Admin/Pages/Add_Categories';
import Signup from './website/Pages/Signup';
import Aprofile from './Admin/Pages/Aprofile';
import Profile from './website/Pages/Profile';












function App() {
  return (
    <div>
       <Router>
        <Routes>
      <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
        <Route
            path="/gallery"
            element={
              <>
                <Gallery/>
              </>
            }
      ></Route>
       <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
      ></Route>
       <Route
            path="/service"
            element={
              <>
                <Service/>
              </>
            }
      ></Route>
       <Route
            path="/product"
            element={
              <>
                <Product/>
              </>
            }
      ></Route>
       <Route
            path="/login"
            element={
              <>
                <Login/>
              </>
            }
      ></Route>
       <Route
            path="/signup"
            element={
              <>
                <Signup/>
              </>
            }
      ></Route>
      <Route
            path="/profile"
            element={
              <>
                <Profile/>
              </>
            }
      ></Route>
            

       {/* ------------------------------------------------------------------------------- */}
      {/* admin */}
      <Route
            path="/manage_categories"
            element={
              <>
                <Manage_Categories />
              </>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          ></Route>
            <Route
            path="/add_categories"
            element={
              <>
                <Add_Categories />
              </>
            }
          ></Route>
           
          <Route
            path="/add_services"
            element={
              <>
                <Add_Services />
              </>
            }
          ></Route>
          <Route
            path="/add-manage"
            element={
              <>
                <Manage_services />
              </>
            }
          ></Route>

           <Route       
            path="/admin-login"
            element={
              <>
                <Admin_login />
              </>
            }
          ></Route>
 
             <Route       
            path="/manage_customer"
            element={
              <>
                <Manage_customer />
              </>
            }
          ></Route>
          <Route       
            path="/add_blog"
            element={
              <>
                <Add_Blog />
              </>
            }
          ></Route>
           <Route       
            path="/manage_contact"
            element={
              <>
                <Manage_contact />
              </>
            }
          ></Route>
           <Route       
            path="/manage_blog"
            element={
              <>
                <Manage_Blog />
              </>
            }
          ></Route>
           <Route       
            path="/manage_services"
            element={
              <>
                <Manage_services/>
              </>
            }
          ></Route>
           <Route       
            path="/aprofile"
            element={
              <>
                <Aprofile/>
              </>
            }
          ></Route>

          
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
