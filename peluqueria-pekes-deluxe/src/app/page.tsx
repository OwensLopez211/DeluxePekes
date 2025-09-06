"use client";

import Hero from '@/components/Hero';
import HeroMobile from '@/components/HeroMobile';
import Services from '@/components/Services';
import ServicesSection from '@/components/ServicesSection';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import { useNavigation } from '@/context/NavigationContext';

export default function Home() {
  const { showGallery, setShowGallery, showAbout, setShowAbout } = useNavigation();

  return (
    <>
      <Hero />
      <HeroMobile />
      <ServicesSection />
      <Services />
      <Testimonials />
      
      {showGallery && (
        <Gallery onClose={() => setShowGallery(false)} />
      )}
      
      {showAbout && (
        <About onClose={() => setShowAbout(false)} />
      )}
    </>
  );
}
