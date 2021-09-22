import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import { useState } from 'react';
import InfoSection from './components/InfoSection';
import { InfoData } from './components/InfoData';
import { InfoData4 } from './components/InfoData4';
import Section2 from './components/Section2';
import { Data2 } from './components/Data2';
import Section4 from './components/Section4';

//importing for the second slider
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData2 } from './components/SliderData2';

//importing for the footer
import Footer from './components/Footer';







function App() {
  //function el dropdown menu, emta tfta7.
  const [isOpen, setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Section2 {...Data2} />
      <ImageSlider slides={SliderData2} />
      <Section4 {...InfoData4} />
      <Footer />

      

      


      
    </>
    
  );
}

export default App;
