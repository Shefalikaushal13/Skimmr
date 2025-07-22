'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-white font-sans">
      {/* Animated dark gradient */}
      <div className="absolute inset-0 z-[-3] animate-gradient bg-gradient-to-r from-black via-[#0f172a] to-[#08246d] bg-[length:400%_400%]" />

      {/* Stars */}
      <div className="absolute inset-0 z-[-2] pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-blue-200 rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.6 + 0.2,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_60%)]" />
      </div>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          SKIMMR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Upload, explore, and vibe with micro-reels. SKIMMR is your playground to express, entertain, and get discovered.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6"
        >
          <Link
            href="/upload"
            className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
          >
            Upload Now
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 md:px-16 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-3"
        >
          About SKIMMR
        </motion.h2>
        <p className="text-lg text-gray-300">
          SKIMMR lets you effortlessly upload and enjoy reels made for fast moments. Whether you are a creator or a newbie just starting out with content creation, Skimmr is for everyone, literally.
        </p>
      </section>

      {/* Built With Section */}
      <section className="py-12 px-4 md:px-16 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-5"
        >
          Built With
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
          {[
            { src: 'nextjs-logo.png', label: 'Next.js' },
            { src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', label: 'Tailwind CSS' },
            { src: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg', label: 'MongoDB' },
            { src: '/daisyui-logo.png', label: 'DaisyUI' },
            { src: '/imagekit-logo.png', label: 'ImageKit' },
            { src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', label: 'Node.js' },
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center hover:scale-105 transition">
              <img src={tech.src} alt={tech.label} className="w-18 h-18 object-contain mb-1" />
              <p className="text-gray-300 text-sm">{tech.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
