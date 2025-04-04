'use client';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import "../../styles/globals.css";

export default function CustomizeCard() {
  const [selectedCard, setSelectedCard] = useState('standard');
  const [currentImage, setCurrentImage] = useState(0);

  const cardImages = [
    "/public/card-main.jpg",
    "/public/card-angle.jpg",
    "/public/card-phone.jpg",
    "/public/card-front.jpg"
  ];

  const cardOptions = [
    { id: 'standard', name: 'Standard Card', description: 'Minimalistic design', price: 'Included', popular: false },
    { id: 'custom', name: 'Custom Card', description: '', price: '+$50', popular: true },
    { id: 'metal', name: 'Metal Card', description: '', price: '+$100', popular: false },
  ];

  const colorOptions = [
    { id: 'black', color: 'bg-black' },
    { id: 'navy', color: 'bg-blue-900' },
    { id: 'gold', color: 'bg-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Customize Your Card</title>
        <meta name="description" content="Customize your OVOU card" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Steps Indicator */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/select-plan" className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">
                <span>1</span>
              </div>
            </Link>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full">
                <span>2</span>
              </div>
              <h2 className="ml-4 text-xl font-semibold text-gray-900">Customize your card</h2>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">
              <span>3</span>
            </div>
          </div>
        </div>

        {/* Card Preview Section */}
        <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
          <div className="relative aspect-[16/9] w-full">
            {/* Placeholder for card image - in production, use actual images */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <img 
                src="/api/placeholder/1000/500" 
                alt="OVOU Card with Phone" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex p-4 space-x-2">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-16 h-16 rounded overflow-hidden border-2 ${
                  currentImage === index ? 'border-orange-500' : 'border-transparent'
                }`}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/64/64" 
                    alt={`Card view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Card Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-900 mb-4">Select a card that suits you best</h3>
          
          <div className="space-y-4">
            {cardOptions.map((card) => (
              <div 
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`border rounded-lg p-4 cursor-pointer transition ${
                  selectedCard === card.id ? 'border-orange-500 bg-orange-50' : 'border-gray-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="text-lg font-medium text-gray-900">{card.name}</h4>
                      {card.popular && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                    {card.description && <p className="text-gray-600 mt-1">{card.description}</p>}
                    
                    {card.id === 'standard' && (
                      <div className="flex mt-2 space-x-2">
                        {colorOptions.map((colorOption) => (
                          <div 
                            key={colorOption.id} 
                            className={`w-6 h-6 rounded-full ${colorOption.color} border border-gray-300`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`text-lg ${card.id === 'standard' ? 'text-orange-500' : 'text-gray-900'}`}>
                      {card.price}
                    </span>
                    
                    {selectedCard === card.id && (
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <Link 
            href="/finalize-order" 
            className="block w-full bg-orange-500 text-white text-center py-4 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Continue
          </Link>
          <p className="text-center text-gray-500 mt-4">Trial Includes Smart Card.</p>
        </div>
      </main>
    </div>
  );
}





