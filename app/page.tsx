'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import ServicesSection from '@/components/services/ServicesSection';
import PricingSection from '@/components/pricing/PricingSection';
import BarbersSection from '@/components/barbers/BarbersSection';
import GallerySection from '@/components/gallery/GallerySection';
import FeaturesSection from '@/components/features/FeaturesSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import BookingSection from '@/components/booking/BookingSection';
import BlogSection from '@/components/blog/BlogSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import BackToTop from '@/components/ui/BackToTop';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>('HAIRCUT + WASH');
  const [selectedBarber, setSelectedBarber] = useState<string>('Any Master Barber');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('booking');
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedService(packageName);
    scrollToSection('booking');
  };

  const handleSelectBarber = (barberName: string) => {
    setSelectedBarber(barberName);
    scrollToSection('booking');
  };

  const handleBookLook = (lookTitle: string) => {
    setSelectedService(`Haircut Inspired by: ${lookTitle}`);
    scrollToSection('booking');
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#EDEDED] relative overflow-x-hidden selection:bg-[#1E5EFF] selection:text-white">
      {/* Header Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Hero Section with WebGL Shader Canvas */}
      <HeroSection onNavigate={scrollToSection} />

      {/* About Section */}
      <AboutSection />

      {/* Services Menu */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Pricing Packages */}
      <PricingSection onSelectPackage={handleSelectPackage} />

      {/* Barbers Team */}
      <BarbersSection onSelectBarber={handleSelectBarber} />

      {/* Gallery & Lightbox */}
      <GallerySection onBookLook={handleBookLook} />

      {/* Brand Value Pillars */}
      <FeaturesSection />

      {/* Testimonials Carousel */}
      <ReviewsSection />

      {/* WhatsApp Online Booking System */}
      <BookingSection
        initialService={selectedService}
        initialBarber={selectedBarber}
      />

      {/* Grooming Articles & Guides */}
      <BlogSection />

      {/* Location & Opening Hours */}
      <ContactSection />

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Floating Actions */}
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  );
}
