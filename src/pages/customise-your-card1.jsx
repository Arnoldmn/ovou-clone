'use client';
import { useState } from 'react';
import Head from 'next/head';
import '../../styles/globals.css';

export default function CardCustom() {
  const [cardInfo, setCardInfo] = useState({
    name: 'First & Last Name',
    subtitle: 'Title at Company',
    finish: 'silver',
    layout: 'classic',
    flipped: false,
  });

  // Available customization options
  const finishes = [
    { id: 'blacksilver', name: 'Black & Silver', color1: 'bg-black', color2: 'bg-gray-300' },
    { id: 'blackgold', name: 'Black & Gold', color1: 'bg-black', color2: 'bg-yellow-600' },
    { id: 'silver', name: 'Classic Silver', color1: 'bg-gray-300', color2: 'bg-gray-500' },
  ];

  const layouts = [
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'ultramodern', name: 'Ultra Modern' },
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  // Handle finish selection
  const handleFinishChange = (finish) => {
    setCardInfo({
      ...cardInfo,
      finish: finish,
    });
  };

  // Handle layout selection
  const handleLayoutChange = (layout) => {
    setCardInfo({
      ...cardInfo,
      layout: layout,
    });
  };

  // Handle card flip
  const handleFlip = () => {
    setCardInfo({
      ...cardInfo,
      flipped: !cardInfo.flipped,
    });
  };

  // Determine card background based on selected finish
  const getCardBackground = () => {
    switch (cardInfo.finish) {
      case 'blackgold':
        return 'bg-gradient-to-r from-black to-yellow-800';
      case 'blacksilver':
        return 'bg-gradient-to-r from-black to-gray-700';
      case 'silver':
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  // Get text color and shadow based on card background
  const getTextStyles = () => {
    switch (cardInfo.finish) {
      case 'blackgold':
        return 'text-yellow-100 text-shadow-md';
      case 'blacksilver':
        return 'text-white text-shadow-md';
      case 'silver':
      default:
        return 'text-gray-800 font-semibold';
    }
  };

  // Determine card layout style
  const getCardLayout = () => {
    switch (cardInfo.layout) {
      case 'modern':
        return 'items-center text-center';
      case 'ultramodern':
        return 'items-end text-right pr-8';
      case 'classic':
      default:
        return 'items-start text-left pl-8';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Head>
        <title>OVOU Card Designer</title>
        <meta name="description" content="Design your custom OVOU card" />
      </Head>

      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">
                1
              </span>
              <span className="text-gray-800 font-medium hidden sm:inline">Details</span>
            </div>
            <div className="w-12 h-1 bg-gray-300 mx-2"></div>
            <div className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white font-bold">
                2
              </span>
              <span className="text-gray-800 font-medium hidden sm:inline">Customize your card</span>
            </div>
            <div className="w-12 h-1 bg-gray-300 mx-2"></div>
            <div className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-600 font-bold">
                3
              </span>
              <span className="text-gray-600 font-medium hidden sm:inline">Complete</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            {/* Card preview area */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-full max-w-md relative">
                <div className="flex justify-between items-center mb-4">
                  <button onClick={() => {
                    
                  }} className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  <button onClick={handleFlip} className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
                
                {/* Card preview */}
                <div 
                  className={`relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden shadow-xl transform transition-all duration-700 ${
                    cardInfo.flipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div className={`absolute inset-0 backface-hidden ${cardInfo.flipped ? 'opacity-0' : 'opacity-100'} ${getCardBackground()} flex flex-col justify-center ${getCardLayout()}`}>
                    <div className={`${getTextStyles()}`}>
                      <h2 className="text-2xl font-bold mb-2 tracking-wide">{cardInfo.name}</h2>
                      <p className="text-lg opacity-90 font-medium letter-spacing-wide">{cardInfo.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className={`absolute inset-0 backface-hidden ${cardInfo.flipped ? 'opacity-100' : 'opacity-0'} bg-black flex flex-col justify-between items-center p-6`}>
                    <div className="flex justify-between w-full">
                      <div className="border rounded-lg p-2 inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div className="w-24 h-24 bg-white flex items-center justify-center">
                        {/* QR Code placeholder */}
                        <div className="w-20 h-20 grid grid-cols-5 grid-rows-5 gap-0.5">
                          {Array(25).fill().map((_, i) => (
                            <div key={i} className={`bg-black ${Math.random() > 0.7 ? 'opacity-0' : ''}`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-white text-2xl font-bold tracking-widest">OVOU</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customization options */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Design Your Card</h2>
              
              {/* Card info inputs */}
              <div className="mb-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={cardInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md mb-4"
                />
                <input
                  type="text"
                  name="subtitle"
                  placeholder="Title at Company"
                  value={cardInfo.subtitle}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              
              {/* Finish options */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Finish - {finishes.find(f => f.id === cardInfo.finish)?.name}</h3>
                <div className="flex gap-4">
                  {finishes.map((finish) => (
                    <button
                      key={finish.id}
                      className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
                        cardInfo.finish === finish.id ? 'border-blue-500' : 'border-transparent'
                      }`}
                      onClick={() => handleFinishChange(finish.id)}
                    >
                      <div className="flex h-full">
                        <div className={`w-1/2 ${finish.color1}`}></div>
                        <div className={`w-1/2 ${finish.color2}`}></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Layout options */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Select Layout - {layouts.find(l => l.id === cardInfo.layout)?.name}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {layouts.map((layout) => (
                    <button
                      key={layout.id}
                      className={`p-4 border rounded-md ${
                        cardInfo.layout === layout.id
                          ? 'bg-gray-200 border-gray-400'
                          : 'bg-white border-gray-200'
                      }`}
                      onClick={() => handleLayoutChange(layout.id)}
                    >
                      <div className="aspect-[1.586/1] flex items-center justify-center">
                        {layout.id === 'classic' && <div className="w-full h-full flex items-start justify-start p-2">
                          <div className="w-16 h-4 bg-gray-400 rounded"></div>
                        </div>}
                        {layout.id === 'modern' && <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-4 bg-gray-400 rounded"></div>
                        </div>}
                        {layout.id === 'ultramodern' && <div className="w-full h-full flex items-end justify-end p-2">
                          <div className="w-16 h-4 bg-gray-400 rounded"></div>
                        </div>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Continue button */}
              <button className="w-full py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition">
                Continue
              </button>
              
              <p className="text-center text-gray-500 mt-4">Trial Includes Smart Card.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

