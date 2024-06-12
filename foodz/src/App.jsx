import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Carousel from './components/Carousel.jsx';
import ItemsSection from './components/Items.jsx';

function App() {
  return (
    <>
      <section>
        <Header />
        <Carousel />
        <ItemsSection />
      </section>
    </>
  );
}

export default App;
