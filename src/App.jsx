import { useState } from 'react'
import './App.css'
import Navbar from './src/components/Navbar';
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {


  return (
    <div className="App">
      <Navbar />
 
      <Routes>      
        <Route path="/signup" element={ <SignupPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
      </Routes>
    </div>
  )
}

export default App