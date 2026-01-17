'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery';
import MenuStand from '@/components/MenuStand';
import Menu from '@/components/Menu';
import FeaturedPicks from '@/components/FeaturedPicks';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Navigation />
      <Hero />
      <Story />
      <Gallery />
      <MenuStand />
      <Menu />
      <FeaturedPicks />
      <Testimonials />
      <Location />
      <Footer />
    </>
  );
}
