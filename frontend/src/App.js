import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from "./Component/Signup.js";
import Signin from "./Component/Signin.js";
import Dashboard from "./Component/Dashboard.js";
import Welcome from "./Component/Welcom.js";  // Make sure the file name is correct
import Inventory from "./Component/Inventory.input.js"; // Assuming the file is named Inventory.js

import { DataProvider } from './Context/user.context.js'; 
function App() {
  return (
  
    <DataProvider>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    
    </DataProvider>
    // <Inventory/>
  );
}

export default App;
