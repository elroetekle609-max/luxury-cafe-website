'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-espresso/95 backdrop-blur-md border-b border-gold/10 shadow-deep'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-serif font-bold gradient-text cursor-pointer"
        >
          ☕ Brew Heaven
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#D4AF37' }}
              className="text-cream/80 hover:text-gold transition-colors duration-300 font-light"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-8 py-3 bg-gold text-espresso font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-glow-gold"
        >
          Reserve Now
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-espresso/95 backdrop-blur-md border-t border-gold/10 px-6 py-4"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-cream/80 hover:text-gold transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-3 bg-gold text-espresso font-semibold rounded-full mt-4">
              Reserve Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
