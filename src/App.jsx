import React from 'react'
import Navbar from './sections/Navbar';
import Tushar from './sections/Tushar';
import About from './sections/About';
import { SmoothCursor } from './components/SmoothCursor';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl" >
      <SmoothCursor />
      {/* navbar */} <Navbar />
      {/* hero */} <Tushar />
      {/* about */} <About />
      <section className="min-h-screen"></section>
      {/* projects */}
      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>
  )
};

export default App