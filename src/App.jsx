import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import items from './components/data.json';
import HornFilter from './components/HornFilter'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <HornFilter horns={items.horns}/>
      <Footer title="Charlie Arriaga" />
      <Gallery />
    </>
  )
}


export default App;