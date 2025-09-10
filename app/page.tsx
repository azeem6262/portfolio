'use client'
import React from 'react'
import { useEffect } from 'react'
import { motion } from "framer-motion";
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import LightRays from '@/Reactbits/LightRays/LightRays';
import TextType from '@/Reactbits/TextType/TextType';
import { BackgroundCellCore } from './components/BackgroundCellCore';

function Marquee() {
  const DateDisplay = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString('en-US', options);
    useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll();

      return () => {
        locomotiveScroll.destroy(); // cleanup
      };
    }
  }, []);

  return <div className='font-["Oswald"] font-extrabold'>{formattedDate}</div>;
  };
 
  return (
    <>
    <Navbar />
    <div className='w-full h-screen'>
      <div className='absolute inset-0 z-0'>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.3}
        rayLength={1.5}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.3}
        distortion={0.05}
        className="custom-rays"
      />
      </div>
    <div className='mt-15 landing relative z-50'>
    <div className='w-full h-[100px] px-10 pt-20 font-["Oswald"] font-bolder -tracking-normal text-zinc-100 text-9xl relative'>
      <TextType 
        text={["Driven by curiosity and code", "I'm Mohammed Azeem", "a creator of digital applications."]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
      />
    </div>
    <div data-scroll data-scroll-section data-scroll-speed='-0.4' className='w-full h-full flex items-center justify-center'>
        <div className='mt-50 left h-[250px] w-1/3 px-10 flex-grow'>
            {["Learn.", "Practise.", "Implement."].map((item, index) => {
                return (
                    <div key={index} className='masker'>
                        <div className='w-fit flex items-end'>
                        <motion.h1 initial={{ x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1 }}
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 2.5}}
                        className="text-zinc-100 pt-[2vw] -mb-[1vw] uppercase text-[6vw] leading-[.75] font-['Oswald']">
                            
                        {item}</motion.h1>
                        
                        </div>
                    </div>
                );
            })}
          </div>
        
        
        
         
        
        <div className='mt-50 for-3d-render centre h-[300px] w-1/3 flex items-center justify-center z-10'>
            
        </div>
        <div className='right overflow-hidden h-[250px] pl-[20px] pt-[2px] w-1/3 text-zinc-100 text-4xl
        font-["Oswald_Extralight"] flex-grow'>
            <div className='pt-40 pl-60'>
                <h4 className='font-light'>Available for work</h4>
                <DateDisplay />
            </div>
        </div>
        </div>
        </div>
        </div>


        <div className='works h-[2000px] w-full'>
        <div data-scroll data-scroll-section data-scroll-speed = '-0.2' className='flex items-center w-full h-1/3 bg-zinc-900 rounded-tl-3xl overflow-hidden rounded-tr-3xl font-["Oswald_ExtraLight"] mt-40'>
            <div className='flex flex-col items-center w-1/2 h-full whitespace-nowrap overflow-hidden'>
            
             <div className='mr-auto p-6 mb-10 font-["Oswald_ExtraLight"] text-zinc-100 text-3xl tracking-tight font-light'>Created a modern website with cool animations. <a className='underline block' href="https://ochi-clone-phi-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">Click here</a></div>
              <motion.div animate={{x: ["0%","-50%"]}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='flex whitespace-nowrap border-y-2 border-zinc-100 py-4'>
                <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ochi Clone Ochi Clone Ochi Clone</h1>
                <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ochi Clone Ochi Clone Ochi Clone</h1>
                <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ochi Clone Ochi Clone Ochi Clone</h1>
                <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ochi Clone Ochi Clone Ochi Clone</h1>
                <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ochi Clone Ochi Clone Ochi Clone</h1>
                
               
                
              </motion.div>
            </div> 
            <div className='forVideo w-1/2 h-full flex items-center justify-center'>
              <div className='w-full h-full'>
              <video className='w-full h-full block align-top rounded-2xl' autoPlay muted loop src="/Recording 2025-06-17 012546.mp4"></video></div>
              
            </div>
        </div>
        
        <div data-scroll data-scroll-section data-scroll-speed = '-0.35' className='flex items-center w-full h-1/3 bg-zinc-800 rounded-tl-3xl overflow-hidden rounded-tr-3xl font-["Oswald_ExtraLight"]'>
           <div className='flex flex-col items-center w-1/2 h-full whitespace-nowrap overflow-hidden'>
             <div className='mr-auto p-6 mb-10 font-["Oswald_ExtraLight"] text-zinc-100 text-3xl tracking-tight font-light'> EtherKnights is a Web3 NFT platform where users can mint unique NFTs. <a className='underline block' href="https://ether-knights-lvcf.vercel.app/" target="_blank" rel="noopener noreferrer">Click here</a></div>
             <motion.div animate={{x: ["0%","-50%"]}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='flex whitespace-nowrap border-y-2 border-zinc-100 py-4'>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ether Knights</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ether Knights</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ether Knights</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ether Knights</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>Ether Knights</h1>
             </motion.div>
           </div> 
           <div className='w-1/2 h-full flex items-center justify-center'>
             <div className='w-full h-full'>
             <video className='w-full h-full block align-top' autoPlay muted loop src="\etherKnightsexb.mp4"></video></div>
            
           </div>
        </div>
        <div data-scroll data-scroll-section data-scroll-speed = '-0.35' className='flex items-center w-full h-1/3 bg-zinc-900 rounded-tl-3xl overflow-hidden rounded-tr-3xl font-["Oswald_ExtraLight"]'>
           <div className='flex flex-col items-center w-1/2 h-full whitespace-nowrap overflow-hidden'>
             <div className='mr-auto p-6 mb-10 font-["Oswald_ExtraLight"] text-zinc-100 text-3xl tracking-tight font-light'> Constructed a fullstack app that will make your moments with friends easier. <a className='underline block' href="https://settle-it-x637.vercel.app/" target="_blank" rel="noopener noreferrer">Click here</a></div>
             <motion.div animate={{x: ["0%","-50%"]}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='flex whitespace-nowrap border-y-2 border-zinc-100 py-4'>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>settleIt</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>settleIt</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>settleIt</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>settleIt</h1>
               <h1 className='text-zinc-100 text-8xl font-bold tracking-tighter leading-none pr-5'>settleIt</h1>
             </motion.div>
           </div> 
           <div className='w-1/2 h-full flex items-center justify-center'>
             <div className='w-full h-full'>
             <video className='w-full h-full block align-top' autoPlay muted loop src="\settleItexb.mp4"></video></div>
            
           </div>
        </div>
    </div>


    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='skills w-full min-h-screen bg-black flex items-center justify-center'>
        <div className='w-1/2 h-full text-zinc-100 text-8xl p-15 text-bolder tracking-loose'><h1 className='font-["Oswald"]'>Developer</h1><h1 className='font-["Oswald"]'>Designer</h1><h1 className='font-["Oswald"]'>Creator/</h1>
        </div>
        <div className='w-1/2 h-full flex flex-col'>
            <div className='w-full h-1/4  p-15 font-["Oswald"] text-8xl text-zinc-100 text-center'><h1>Skills</h1></div>
            <div className='w-full h-3/4 flex items-center justify-center'>
                <div className='h-full w-1/3 flex flex-col items-center'>
                <h4 className='text-2xl text-zinc-100 font-bold font-["Oswald_ExtraLight"]'>Languages and tools</h4>
                {['C++', 'JavaScript', 'Git', 'SQL', 'Firebase'].map((item, index)=> (
                  <motion.h4 key={index} className='text-2xl font-["Oswald_ExtraLight"] text-zinc-100 pt-5'  
                  whileHover={{
                    x: Math.random() * 100 - 50,
                    opacity: 0.7,}}
                  transition={{ duration: 1, ease: 'easeOut' }}>{item}</motion.h4>
                ))}
                </div> 
                <div className='h-full w-1/3 flex flex-col items-center'>
                 <h4 className='text-2xl text-zinc-100 font-bold font-["Oswald_ExtraLight"]'>Frameworks and Libraries</h4>
                {['React', 'Node.js', 'Three.js', 'Bootstrap', 'TailwindCSS', 'Framer Motion'].map((item, index)=> (
                  <motion.h4 key={index} className='text-2xl font-["Oswald_ExtraLight"] text-zinc-100 pt-5'
                   whileHover={{
                    x: Math.random() * 100 - 50,
                    opacity: 0.7,}}
                  transition={{ duration: 1, ease: 'easeOut' }}>{item}</motion.h4>
                ))}</div> 
                <div className='h-full w-1/3 flex flex-col items-center'>
                 <h4 className='text-2xl text-zinc-100 font-bold font-["Oswald_ExtraLight"]'>Core CS Concepts</h4>
                {['DSA', 'DBMS', 'OOP', 'Operating Systems'].map((item, index)=> (
                  <motion.h4 key={index} className='text-2xl font-["Oswald_ExtraLight"] text-zinc-100 pt-5' 
                  whileHover={{
                    x: Math.random() * 100 - 50,
                    opacity: 0.7,}}
                  transition={{ duration: 1, ease: 'easeOut' }}>{item}</motion.h4>
                ))}</div>
            </div>
        </div>
    </div>
    
    {/* --- NEW, REDESIGNED ABOUT ME SECTION --- */}
    <div 
  data-scroll 
  data-scroll-section 
  className='relative w-full min-h-screen py-20 px-10 bg-zinc-900 text-zinc-200 flex flex-col items-center justify-center overflow-hidden'
>
  {/* Subtle animated background */}
  <BackgroundCellCore />

  <div className='relative z-10 max-w-4xl mx-auto text-center'>
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="text-6xl md:text-8xl font-['Oswald'] font-bold mb-8"
    >
      About Me
    </motion.h2>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay: 0.2 }}
      className='text-xl md:text-2xl text-zinc-400 font-light leading-relaxed font-["Oswald_ExtraLight"] mb-10'
    >
      I am a passionate developer driven by the challenge of building innovative and seamless digital experiences. With a strong foundation in computer science and a focus on both user-centric frontend design and robust backend logic, I enjoy bringing complex ideas to life, from decentralized applications to dynamic, modern websites.
    </motion.p>
    
    <motion.a 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, delay: 0.4 }}
      href="/Contact"
      className='inline-block border-2 border-zinc-200 text-zinc-200 font-bold text-lg py-3 px-8 rounded-full hover:bg-zinc-200 hover:text-zinc-900 transition-colors duration-300'
    >
      Get In Touch
    </motion.a>
  </div>
</div>

{/* --- NEW, REDESIGNED FOOTER --- */}
<footer data-scroll data-scroll-section data-scroll-speed='-0.1' className='w-full py-12 px-10 bg-black text-zinc-400'>
  <div className='max-w-7xl mx-auto'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left'>
      {/* Column 1: Brand */}
      <div>
        <h3 className="text-2xl font-['Oswald'] font-bold text-white mb-2">Mohammed Azeem</h3>
        <p className='font-light'>Developer & Creator</p>
      </div>
      {/* Column 2: Quick Links (Optional) */}
      <div>
        <h4 className='font-bold text-white mb-3'>Menu</h4>
        <ul className='space-y-2 font-light'>
          <li><a href="#home" className='hover:text-cyan-400 transition'>Home</a></li>
          <li><a href="#works" className='hover:text-cyan-400 transition'>Work</a></li>
          <li><a href="#about" className='hover:text-cyan-400 transition'>About</a></li>
        </ul>
      </div>
      {/* Column 3: Socials */}
      <div>
        <h4 className='font-bold text-white mb-3'>Connect</h4>
        <div className='flex justify-center md:justify-start gap-6'>
          <a href="https://github.com/azeem6262" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='hover:text-white transition text-2xl'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.222.694.823.576C20.565 21.795 24 17.3 24 12 24 5.373 18.626 0 12 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/mohammed-azeem-476094250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='hover:text-white transition text-2xl'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className='mt-8 pt-8 border-t border-zinc-800 text-center text-sm font-light'>
        <p>&copy; 2025 Mohammed Azeem. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default Marquee