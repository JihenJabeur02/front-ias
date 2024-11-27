import React from "react";
import { useLocation } from "react-router-dom"; // Import only what is needed for location
import Header from './Header'; // Ensure Header is imported correctly
import Home from "./Home"; // Import the Home component
import Homepage2 from "./Homepage2"; // Import the Homepage2 component
import {  Routes, Route } from 'react-router-dom';
import AboutUs from "./AboutUs"
import SignIn from "./SignIn"
import Login from "./Login";
import Industry from "./Industry";
import Request from "./Request";
import CartPage from "./Cart";

function App() {

  return (
  

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<AboutUs/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/industry" element={<Homepage2/>}/>
<Route path="/request" element={<Request/>}/>
<Route path="/industries" element={<Industry/>}/>
<Route path="/cart" element={<CartPage/>}/>
{/* <Route path="/cart" element={<Cart/>}/> */}



</Routes>
   

    
  
  );
}

export default App;
