import React from 'react';
import './App.css';

// components
import Header from './components/headerComponent/header';
import Home from './components/pages/homeComponent/home';
import Footer from './components/footerComponent/footer';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
