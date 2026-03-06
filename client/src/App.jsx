import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import OrderForm from './components/OrderForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <OrderForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
