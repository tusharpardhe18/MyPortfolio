import Navbar from './sections/Navbar';
import Tushar from './sections/Tushar';
import About from './sections/About';
import { SmoothCursor } from './components/SmoothCursor';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl" >
      {/* navbar */} <Navbar />
      {/* hero */} <Tushar />
      {/* about */} <About />
      {/* projects */} <Projects />
      {/* contact */} <Contact />
      {/* footer */} <Footer />
    </div>
  )
};

export default App