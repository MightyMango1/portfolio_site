"use client"
import Head from 'next/head';
import { useState } from 'react';
//import { Transition } from '@headlessui/react';
import React from 'react';
import Image from 'next/image'

export default function Home() {
  //const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Nolan Kosmal - Portfolio</title>
        <meta name="description" content="Personal portfolio website of Nolan Kosmal" />
      </Head>
      
      {/* Navigation Bar */}

      <nav className="flex items-center justify-between p-6 border-b border-gray-700">
        <div className="absolute left-6 top-6 text-2xl font-bold">Nolan Kosmal</div>
        <ul className="flex-1 flex justify-center space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#development" className="hover:text-gray-400">Development</a></li>
        </ul>
    </nav>
      {/* <nav className="flex justify-center items-center p-6 border-b border-gray-700">

        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#interests" className="hover:text-gray-400">Interests</a></li>
        </ul>
        {/* <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-lg border border-gray-500 hover:bg-gray-700"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
      {/* </div></nav> */}

      {/* Home Page Section */}
      <section id ="top" className="flex flex-col items-center justify-center min-h-screen px-4">
        <Image src="/pfp.jpeg" width={400} height={400} alt="profile picture" className="pb-10"></Image>
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio!</h1>
        <p className="text-xl text-gray-400 max-w-2xl text-center">
          I am Nolan Kosmal, a computer science with business applications student passionate about building impactful projects. 
          Explore my journey, see my work, and learn more about my interests.
        </p>
        <div className="flex justify-center items-center p-12">
        <ul className="flex-1 flex justify-center space-x-6">
          <li><a href="https://www.linkedin.com/in/nolan-kosmal/" target="_blank" className="hover:text-gray-400">Linkedin</a></li>
          <li><a href="https://www.github.com/MightyMango1" target="_blank" className="hover:text-gray-400">Github</a></li>
          <li><a href="mailto:nolan.kosmal@gmail.com" className="hover:text-gray-400">Email</a></li>
        </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-400">
          Hi! I{'\'m'} Nolan. I am a student at the University of California, Riverside, pursuing a Bachelor of Science in Computer Science with Business Applications. I{'\'v'}e been coding
          since the early years of high school. I{'\'v'}e built a multitude of projects in the past couple years and I{'\'m'} currently playing around with Web Design and some backend frameworks/languages. It can be 
          challenging learning things on your own, but it can also be fun because I am constantly learning new things!
          <br/>
          <br/>
           My entire life has been deeply shaped by a love for adventure, creativity, and learning. My main interests revolve around the outdoors, especially in rock climbing.
           I{'\'v'}e been passionate about climbing for over 10 years. It{'\'s'} a passion that{'\'s'} taken me to some amazing places, and it{'\'s'} something I{'\'m'} always excited to keep pursuing. 
           <br/>
           <br/>
          I also have a strong passion for vintage clothing. A few years ago, I combined my love for fashion and nostalgia by founding a vintage clothing store on Depop. 
          Curating and offering timeless pieces to others has been an exciting creative outlet, allowing me to share my appreciation for unique, classic style. Feel free to check it out!
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Quizlet-Style Study App</h3>
            <p className="text-gray-400">Led a team of 7+ developers to create an educational study application for students.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">AI Prompt Generator</h3>
            <p className="text-gray-400">Built an AI-driven tool for generating optimal prompts for text generation models.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">World Guesser Bot</h3>
            <p className="text-gray-400">Designed and implemented an interactive solving bot that suggests optimal guesses for the game {'\"'}Worlde{'\"'}.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Pet Activity Monitor</h3>
            <p className="text-gray-400">Developed a pet activity tracker, allowing pet owners to easily log and monitor pet meals in real-time.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">2D Sandbox Survival Game</h3>
            <p className="text-gray-400">Built a cooperative sandbox survival game where players explore, mine, craft, and battle in a procedurally generated underground world. Built using the 
              Godot game engine </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="development" className="p-12">
        <h2 className="text-3xl font-bold mb-4">What am I currently working on?</h2>
          <ul className="text-lg text-gray-400">
            <li>-Self-teaching Computer Networking / Cybersecurity</li>
            <li>-Grinding Leetcode Problems</li>
            <li>-Attempting to climb v11</li>
          </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 border-t border-gray-700">
        <p>© 2024 Nolan Kosmal. All rights reserved.</p>
        <a href="#top" className="text-gray-400">Back to the top</a>
      </footer>
    </div>
  );
}
