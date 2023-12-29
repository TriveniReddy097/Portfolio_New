import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/header';
import About from './components/About/about';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Skills from './components/Skills/skills';
import Contact from './components/Contact/contact';

function App() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust this value to change when the button appears
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div id="top" className="light app">
        <Header/>
        <div className="main">
          <About />
          <Education />
          <Experience />
          <Skills />
          <Contact />
          <div className="scroll-top" onClick={scrollToTop}>
            {isVisible && <svg class="MuiSvgIcon-arrow MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>}
          </div>
          <div className="footer">
            <a href="/" class="link footer__link">Triveni Gudidoddi</a>
          </div>
        </div>
    </div>
  );
}

export default App;
