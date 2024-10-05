import React from "react";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
//import IdeaValidation from './components/IdeaValidation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      <h1>Netlify Form Test</h1>

      {/* Simple form for testing Netlify submission */}
      <form name="test-form" method="POST" data-netlify="true">
        {/* Hidden input for Netlify form processing */}
        <input type="hidden" name="form-name" value="test-form" />

        {/* Name Field */}
        <p>
          <label>
            Your Name: <input type="text" name="name" required />
          </label>
        </p>

        {/* Email Field */}
        <p>
          <label>
            Your Email: <input type="email" name="email" required />
          </label>
        </p>

        {/* Submit Button */}
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
