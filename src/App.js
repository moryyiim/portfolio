import { motion } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <motion.div
      className='home-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <div className='bg-black'>
        <ThemeProvider>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </ThemeProvider>
      </div>
    </motion.div>
  );
}

export default App;
