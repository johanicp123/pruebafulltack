import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
