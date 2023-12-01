import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {
  return (
    <>
      <Header />
      <Gallery />
      <Footer title="Charlie Arriaga"/>
    </>
  )
}

export default App;