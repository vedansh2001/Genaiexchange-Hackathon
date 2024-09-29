import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

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

// Main App Component
function App() {
  return (
    <>
      <div className='bg-[#111]'>
        <Navbar />
        <div className='bg-gradient-to-b from-gray-700 to-gray-950'>
          <div className='flex items-center justify-center text-6xl min-h-[calc(100vh-280px)] text-slate-200'>
            <div>
              <p className='flex justify-center'>Policies?</p>
              <TypingEffect /> {/* Typing animation */}
            </div>
          </div>

          <div className='flex justify-center text-6xl pb-16 w-screen text-gray-200'>
            Understand Policies with Ease
          </div>
        </div>

        <div className='bg-gradient-to-b from-gray-900 to-gray-950'>
          <div className="w-[70%] ml-[15%] grid grid-cols-2 gap-x-10 gap-y-6 mb-16 ">
            <div className="h-[250px] rounded-lg bg-gradient-to-b from-gray-500 to-gray-700">Grid 1</div>
            <div className="h-[250px] rounded-lg bg-gradient-to-b from-pink-500 to-gray-700">Grid 2</div>
            <div className="h-[250px] rounded-lg bg-gradient-to-b from-yellow-400 to-yellow-700">Grid 3</div>
            <div className="h-[250px] rounded-lg bg-gradient-to-b from-violet-500 to-violet-700">Grid 4</div>
            <div className="h-[250px] rounded-lg bg-gradient-to-b from-orange-500 to-orange-700">Grid 5</div>
            <div className="h-[250px] rounded-lg bg-gradient-to-b from-green-500 to-green-700">Grid 6</div>
          </div>
        </div>

        <div className="App">
          <df-messenger
            project-id="totemic-phoenix-356313"
            agent-id="cd7fd449-9c39-48f6-b112-d4f0820efc82"
            language-code="en"
            max-query-length="-1"
            style={{
              zIndex: 999,
              position: 'fixed',
              bottom: '16px',
              right: '16px',
              '--df-messenger-font-color': '#000',
              '--df-messenger-font-family': 'Google Sans',
              '--df-messenger-chat-background': '#f3f6fc',
              '--df-messenger-message-user-background': '#d3e3fd',
              '--df-messenger-message-bot-background': '#fff'
            }}
          >
            <df-messenger-chat-bubble chat-title="Policies"></df-messenger-chat-bubble>
          </df-messenger>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default App;
