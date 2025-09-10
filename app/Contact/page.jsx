'use client'
import { db } from '../lib/Firebase'
import { collection, addDoc } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import ElectricBorder from '@/Reactbits/ElectricBorder/ElectricBorder'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Users"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert("Form submitted!");
      setFormData({ name: '', email: '', message: '' });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Form submission failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10 px-4">
      
      <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        
        style={{ 
          borderRadius: "1.5rem",
          backgroundColor: "rgba(24, 24, 27, 0.5)",
          backdropFilter: "blur(16px)" 
        }}
      >
        
        <div className="flex flex-col items-center justify-center p-8 rounded-3xl w-full max-w-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6 tracking-tighter text-zinc-100 font-['Oswald']">Let's make it happen!</h1>
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-zinc-100 bg-transparent border-2 border-zinc-500 rounded-xl focus:border-white focus:outline-none transition-colors duration-200 placeholder-zinc-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Want to hear back? Enter your email"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 text-zinc-100 bg-transparent border-2 border-zinc-500 rounded-xl focus:border-white focus:outline-none transition-colors duration-200 placeholder-zinc-400"
              required
            />
            <textarea
              name="message"
              placeholder="Say hello or drop a note..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 text-zinc-100 bg-transparent border-2 border-zinc-500 rounded-xl focus:border-white focus:outline-none transition-colors duration-200 placeholder-zinc-400 resize-none"
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-zinc-100 text-lg font-['Oswald_ExtraLight'] border-2 border-zinc-100 p-3 rounded-full hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-300 ease-in-out font-bold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </ElectricBorder>
    </div>
  )
}

export default Contact