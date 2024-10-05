import React from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import IdeaValidation from './components/IdeaValidation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <IdeaValidation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
