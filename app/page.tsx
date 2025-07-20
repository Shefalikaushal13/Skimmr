'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer } from 'react-icons/si';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black text-white font-sans">
      {/* Animated Background Texture */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  style={{
    backgroundImage: "url('/noise-texture.jpg')",
    backgroundSize: 'cover',
    opacity: 0.4,
  }}
  className="w-full h-full"
/>
      </div>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
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
          Upload, explore, and vibe with micro-reels. SKIMMR is your playground to express, entertain, and get discovered.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
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
      <section id="about" className="py-20 px-4 md:px-16 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-4"
        >
          About SKIMMR
        </motion.h2>
        <p className="text-lg text-gray-300">
          SKIMMR lets you effortlessly upload and enjoy reels made for fast moments. Whether you are a creator or a newbie just starting out with content creation, Skimmr is for everyone, literally.
        </p>
      </section>

      
{/* Built With Section */}
<section className="py-20 px-4 md:px-16 max-w-5xl mx-auto text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl font-bold mb-6"
  >
    Built With
  </motion.h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
    {/* Next.js */}
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img
        src="nextjs-logo.png"
        alt="Next.js"
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-gray-300 text-sm">Next.js</p>
    </div>

    {/* Tailwind CSS */}
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img
        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        alt="Tailwind CSS"
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-gray-300 text-sm">Tailwind CSS</p>
    </div>

    {/* MongoDB */}
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img
        src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
        alt="MongoDB"
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-gray-300 text-sm">MongoDB</p>
    </div>

    {/* DaisyUI */}
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img
        src="/daisyui-logo.png"
        alt="DaisyUI"
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-gray-300 text-sm">DaisyUI</p>
    </div>

    {/* ImageKit */}
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img
        src="/imagekit-logo.png"
        alt="ImageKit"
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-gray-300 text-sm">ImageKit</p>
    </div>

    {/* Node.js */}
    <div className="flex flex-col items-center hover:scale-105 transition">
      <img
        src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
        alt="Node.js"
        className="w-16 h-16 object-contain mb-2"
      />
      <p className="text-gray-300 text-sm">Node.js</p>
    </div>
  </div>
</section>


    </div>
  );
}
