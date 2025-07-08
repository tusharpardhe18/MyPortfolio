import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Tushar from "./sections/Tushar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import { SmoothCursor } from "./components/SmoothCursor";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual data/image preload if needed)
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto max-w-7xl">
          {/* navbar */} <Navbar />
          {/* hero */} <Tushar />
          {/* about */} <About />
          {/* projects */} <Projects />
          {/* contact */} <Contact />
          {/* footer */} <Footer />
          <SmoothCursor />
        </div>
      )}
    </>
  );
};

export default App;
