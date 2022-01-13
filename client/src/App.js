import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './components/Authentication/Signin/Signin';
import Signup from './components/Authentication/Signup/Signup';
import Signout from './components/Authentication/Signout/Signout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signout" element={<Signout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
