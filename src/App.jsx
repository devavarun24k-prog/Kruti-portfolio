import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ConceptToCommerce from './components/ConceptToCommerce';
import BearHouseCaseStudy from './components/BearHouseCaseStudy';
import SelectedWork from './components/SelectedWork';
import ExperienceTimeline from './components/ExperienceTimeline';
import TheEdit from './components/TheEdit';
import CompetenciesGrid from './components/CompetenciesGrid';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#e5e3ec] selection:bg-warm-accent/30 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ConceptToCommerce />
        <BearHouseCaseStudy />
        <SelectedWork />
        <ExperienceTimeline />
        <TheEdit />
        <CompetenciesGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
