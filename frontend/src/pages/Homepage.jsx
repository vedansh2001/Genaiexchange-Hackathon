import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AiModel from '../components/AiModel';


// Function to get a random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  const TypingEffect = () => {
    const [displayedText, setDisplayedText] = useState([]);
    const fullText = 'We are here to help you';
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const timer = setInterval(() => {
        if (!isDeleting) {
          if (currentIndex < fullText.length) {
            const char = fullText[currentIndex];
            setDisplayedText(prev => [...prev, { char: char, color: getRandomColor() }]);
            setCurrentIndex(prev => prev + 1);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1000);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayedText(prev => prev.slice(0, -1));
            setCurrentIndex(prev => prev - 1);
          } else {
            setTimeout(() => {
              setIsDeleting(false);
            }, 1000);
          }
        }
      }, isDeleting ? 100 : 200);
  
      return () => clearInterval(timer);
    }, [isDeleting, currentIndex, fullText]);
  
    return (
      <p className='flex justify-center'>
        {displayedText.map((item, index) => (
          <span key={index} style={{ color: item.color }}>
            {item.char === ' ' ? '\u00A0' : item.char}
          </span>
        ))}
        <span className='border-r-4 pr-1 animate-blink'></span>
      </p>
    );
  };


const Homepage = () => {

    
  return (
    <>
    
    <Navbar/>


    <div>
      <div className='bg-gradient-to-b from-gray-700 to-gray-950'>
          <div className='flex items-center justify-center text-6xl min-h-[calc(100vh-280px)] text-slate-200'>
            <div>
              <p className='flex justify-center'>Policies?</p>
              <TypingEffect /> {/* Typing animation */}
            </div>
          </div>

          <div className='flex justify-center text-6xl pb-6 w-screen text-gray-200'>
            Understand Policies with Ease
          </div>
        </div>

        <div className='bg-gradient-to-b from-gray-900 to-gray-950 pt-6'>
          <div className="w-[70%] ml-[15%] grid grid-cols-2 gap-x-10 gap-y-6 mb-16 ">
            <Link to="/policydetail">
              <div className="h-[250px] text-3xl flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-500 to-gray-700">
                Policy 1
              </div>
            </Link>
            <Link to="/policydetail">
              <div className="h-[250px] text-3xl flex items-center justify-center rounded-lg bg-gradient-to-b from-pink-500 to-gray-700">
                Policy 2
              </div>
            </Link>
            <Link to="/policydetail">
              <div className="h-[250px] text-3xl flex items-center justify-center rounded-lg bg-gradient-to-b from-yellow-400 to-yellow-700">
                Policy 3
              </div>
            </Link>
            <Link to="/policydetail">
              <div className="h-[250px] text-3xl flex items-center justify-center rounded-lg bg-gradient-to-b from-violet-500 to-violet-700">
                Policy 4
              </div>
            </Link>
            <Link to="/policydetail">
              <div className="h-[250px] text-3xl flex items-center justify-center rounded-lg bg-gradient-to-b from-orange-500 to-orange-700">
                Policy 5
              </div>
            </Link>
            <Link to="/policydetail">
              <div className="h-[250px] text-3xl flex items-center justify-center rounded-lg bg-gradient-to-b from-green-500 to-green-700">
                Policy 6
              </div>
            </Link>
          </div>
        </div>
    </div>

    
    <AiModel/>



    <Footer/>
    
    </>
  )
}

export default Homepage
