import Navbar from './sections/Navbar';
import Tushar from './sections/Tushar';
import About from './sections/About';
import { SmoothCursor } from './components/SmoothCursor';
import Projects from './sections/Projects';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl" >
      {/* navbar */} <Navbar />
      {/* hero */} <Tushar />
      {/* about */} <About />
      {/* projects */} <Projects />
      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>
  )
};

export default App