import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';
import beasts from './components/data.json';


function App () {
  return (
    <>
      <Header />
      <Gallery title={beasts.title} imageUrl={beasts.image_url} descrpition={beasts.description}/>
      <Footer title="Charlie Arriaga"/>
    </>
  )
}

export default App;