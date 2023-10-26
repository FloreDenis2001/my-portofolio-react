import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/header/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
