import React from 'react';
import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
      <div className='h-screen'>
        <h1>carTTrack</h1>
        <p>Cargo Tracking Software</p>
        <code>Coming soon...</code>
      </div>
      <div>
        <Footer />
      </div>

    </>
  )
}

export default App
