'use client'

import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-chocolate/50 border-t border-gold/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-2xl font-serif gradient-text mb-4">Brew Heaven</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Experience luxury in every sip. We craft more than coffee—we create moments of pure indulgence.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-serif mb-6 text-gold">Contact</h4>
            <div className="space-y-3 text-sm text-cream/70">
              <div className="flex items-center gap-3">
                <FiPhone className="text-gold" />
                <a href="tel:+251999050607">+251 99 905 0607</a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-gold" />
                <a href="mailto:info@brewheavencafe.com">info@brewheavencafe.com</a>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="text-gold" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-serif mb-6 text-gold">Hours</h4>
            <div className="space-y-2 text-sm text-cream/70">
              <div className="flex items-center justify-between">
                <span>Mon - Fri</span>
                <span>7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="text-lg font-serif mb-6 text-gold">Follow Us</h4>
            <div className="flex gap-4">
              {[FaInstagram, FaFacebook, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#D4AF37' }}
                  className="text-cream/60 hover:text-gold transition-colors text-lg"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent my-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-cream/50 text-sm"
        >
          <p>&copy; {currentYear} Brew Heaven Cafe. All rights reserved. | Crafted with ☕ and passion</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
