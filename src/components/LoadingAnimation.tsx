'use client'

import { motion } from 'framer-motion'

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-espresso flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center"
      >
        {/* Coffee Cup Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-6xl mb-6 inline-block"
        >
          ☕
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-serif text-gold mb-4"
        >
          Brewing Perfection
        </motion.h2>

        {/* Loader dots */}
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-2 h-2 bg-gold rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingAnimation
