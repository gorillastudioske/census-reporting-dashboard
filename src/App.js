import React from 'react';
import './bootstrap.css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SVGIcons from './components/SVGIcons';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <SVGIcons />
    </div>
  );
}

export default App;
