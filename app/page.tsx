// components/LandingPage.tsx

'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Fun Background Texture using Framer Motion */}
      <motion.div
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute inset-0 -z-10 bg-[url('/bg-texture.png')] bg-cover bg-no-repeat opacity-10 blur-sm"
      />

      {/* Hero Section */}
      <section id="#home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          SKIMMR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          Upload and explore viral reels in seconds. Whether it's comedy, talent, or trends, SKIMMR is the fastest way to connect with the world through short-form content.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/upload"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-xl"
          >
            Upload Now
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-16 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          About SKIMMR
        </motion.h2>
        <p className="text-lg text-gray-300">
          SKIMMR lets you upload reels instantly, find trending clips, and enjoy quick, engaging content. Built for creators and consumers alike, it delivers a seamless scroll, upload, and discover experience.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 md:px-16 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Built With
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center text-4xl text-white">
          <div className="flex flex-col items-center">
            <FaReact className="text-cyan-400" />
            <span className="mt-2 text-sm">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-white" />
            <span className="mt-2 text-sm">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-sky-400" />
            <span className="mt-2 text-sm">Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-blue-500" />
            <span className="mt-2 text-sm">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFramer className="text-pink-400" />
            <span className="mt-2 text-sm">Framer Motion</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-green-500" />
            <span className="mt-2 text-sm">Node.js</span>
          </div>
        </div>
      </section>
    </div>
  );
}
