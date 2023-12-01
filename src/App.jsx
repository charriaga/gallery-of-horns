import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import items from './components/data.json';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Gallery imageURL={items.image_url} title={items.title} description={items.description} key={items._id}/>
      <Footer title="Charlie Arriaga" />

    </>
  )
}


export default App;