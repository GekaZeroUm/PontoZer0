import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pz-black text-white font-sans selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;