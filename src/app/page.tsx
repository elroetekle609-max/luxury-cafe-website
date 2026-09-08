'use client'

import Hero from '@/components/sections/Hero'
import OurStory from '@/components/sections/OurStory'
import FeaturedMenu from '@/components/sections/FeaturedMenu'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import ContactReservation from '@/components/sections/ContactReservation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingAnimation from '@/components/LoadingAnimation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <main className="min-h-screen bg-espresso">
      <Navbar />
      <Hero />
      <OurStory />
      <FeaturedMenu />
      <Gallery />
      <Testimonials />
      <ContactReservation />
      <Footer />
    </main>
  )
}
