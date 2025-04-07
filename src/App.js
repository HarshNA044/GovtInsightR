import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Slider from './components/Slider.js';

function App() {
  return (
    <>
    <Header/>
    <div style={{marginTop: '80px'}}></div>
    <Slider/>
    <Main/>
    <Footer />
    
  
    </>
  );
}

export default App;
