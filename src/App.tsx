import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

/* styles */
import './styles/reset.css';
import './styles/App.css';
import './styles/Header.css';
import './styles/Main.css';
import './styles/Intro.css';
import './styles/About.css';
import './styles/Skill.css';
import './styles/Projects.css';
import './styles/CloneCoding.css';
import './styles/responsive.css';



/* pages */
import Header from './pages/Header'
import Main from './pages/Main';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
import CloneCoding from './pages/CloneCoding';

export interface Props {
  scrollPosition: number
}

function App() {

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main scrollPosition={scrollPosition} />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/clone-coding' element={<CloneCoding />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
