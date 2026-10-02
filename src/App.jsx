import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import CompetenciesGrid from './components/CompetenciesGrid';
import LookbookGallery from './components/LookbookGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-luxury-200 selection:bg-champagne/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <ProjectsShowcase />
        <CompetenciesGrid />
        <LookbookGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
