'use client';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/sanaa-old-city.jpg"
            alt="Old City of Sana'a"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-4"
          >
            Adham Qab
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center mb-8 text-yellow-400"
          >
            Tech Enthusiast & AI Innovator
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a href="https://www.instagram.com/adhamqab" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-yellow-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/adam-qab-620856187/" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-yellow-400 transition-colors">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-red-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm Adham Qab, a tech enthusiast passionate about AI, digital innovation, and building tools that help others.
              Originally from Yemen and based in the U.S., I'm on a mission to use AI and emerging technologies to shape the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-400">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/50 p-6 rounded-lg border border-red-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">AI Chatbot</h3>
              <p className="mb-4">Built with Flask and OpenAI API to demonstrate conversational AI capabilities.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">OpenAI</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Python</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black/50 p-6 rounded-lg border border-red-500"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Personal Portfolio</h3>
              <p className="mb-4">A showcase of my technical skills, certifications, and professional accomplishments.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Tailwind</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Get in Touch</h2>
            <p className="mb-8">Interested in collaborating or learning more about my work?</p>
            <a
              href="mailto:contact@adhamqab.com"
              className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
