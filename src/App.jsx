import React from 'react';
import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Search />
      </div>
      <Hero />
      <div>
        <Footer />
      </div>

    </>
  )
}

export default App
