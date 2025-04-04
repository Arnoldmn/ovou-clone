"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6"; // Checkmark icon

import '../../styles/globals.css';
import { FaArrowRight } from "react-icons/fa";

import Head from 'next/head';
import Link from 'next/link';

export default function SelectPlan() {
  const [activeTab, setActiveTab] = useState('teams'); // Default to teams view
  const [userCount, setUserCount] = useState(5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Select Your Plan</title>
        <meta name="description" content="Choose your subscription plan" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full">
              <span>1</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Select your plan</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">
              <span>2</span>
            </div>
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">
              <span>3</span>
            </div>
            <button className="ml-8 px-6 py-2 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 transition">
              Log In
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-gray-200 rounded-full p-1 mb-10">
          <div className="grid grid-cols-2">
            <button
              className={`py-3 px-6 rounded-full text-center flex items-center justify-center ${
                activeTab === 'individuals' ? 'bg-black text-white' : 'bg-gray-200 text-gray-900'
              }`}
              onClick={() => setActiveTab('individuals')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              For Individuals
            </button>
            <button
              className={`py-3 px-6 rounded-full text-center flex items-center justify-center ${
                activeTab === 'teams' ? 'bg-black text-white' : 'bg-gray-200 text-gray-900'
              }`}
              onClick={() => setActiveTab('teams')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              For Teams
            </button>
          </div>
        </div>

        {/* Plan Details */}
        {activeTab === 'individuals' && (
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-orange-500">Individual</h3>
              <p className="text-gray-700">Complimentary Smart Card included.</p>
              <button className="text-orange-500 font-medium mt-2">See all features</button>
            </div>

            {/* Pricing Options */}
            <div className="space-y-4">
              {/* Annual Plan */}
              <div className="border border-gray-300 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Annual Plan</h4>
                  <p className="text-gray-600">Save 31% | Equal to $8.25/mo</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold">$99</span>
                  <div className="text-sm text-gray-500">Billed Annually</div>
                  <Link href="/customise-your-card" className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center">
                    Continue <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Free Trial */}
              <div className="border border-gray-300 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">1 Month Free Trial</h4>
                  <p className="text-gray-600">Trial includes Smart Card.</p>
                  <button className="text-blue-500">Learn More</button>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold">$0</span>
                  <div className="w-20"></div>
                  <Link href="/customise-your-card" className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center">
                    Continue <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Monthly Plan */}
              <div className="border border-gray-300 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Pay Monthly</h4>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold">$12/mo</span>
                  <div className="w-20"></div>
                  <Link href="/customise-your-card" className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center">
                    Continue <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Gift Option */}
            <div className="mt-8 bg-blue-900 text-white rounded-lg p-6">
              <h4 className="text-xl font-medium">OVOU Gift</h4>
              <p className="mb-4">Available as eGift or beautifully packaged Smart Cards. Ideal for client appreciation or event giveaways.</p>
              <button className="bg-blue-900 border border-white text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                Browse Gifts
              </button>
            </div>
          </div>
        )}

        {activeTab === 'teams' && (
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-purple-700">Teams</h3>
              <p className="text-gray-700">
                Complimentary Custom Smart Cards Included with Your Initial Sign Up. 
                <span className="text-orange-500 font-medium ml-1 cursor-pointer">See all features</span>
              </p>
            </div>

            {/* User Slider */}
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="font-medium mr-4">{userCount}</span>
                <span className="text-gray-600">Users</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 relative">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full px-4">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={userCount}
                    onChange={(e) => setUserCount(parseInt(e.target.value))}
                    className="appearance-none w-full h-2 bg-transparent absolute cursor-pointer"
                  />
                </div>
                <div 
                  className="h-2 bg-orange-500 rounded-full" 
                  style={{ width: `${userCount}%` }}
                ></div>
                <div 
                  className="h-4 w-4 bg-orange-500 rounded-full absolute top-1/2 transform -translate-y-1/2"
                  style={{ left: `${userCount}%` }}
                ></div>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="space-y-4">
              {/* Annual Plan */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Annual Plan</h4>
                    <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mt-1">
                      Save 25%
                    </div>
                    <p className="text-gray-600 mt-1">Equal to $7.5/mo</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <span className="text-2xl font-bold">$90</span>
                      <span className="text-gray-600">/seat</span>
                      <div className="text-sm text-gray-500">$450 Billed Annually</div>
                    </div>
                    <Link href="/customise-your-card" className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center">
                      Continue <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Free Trial */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">1 Month Free Trial</h4>
                    <p className="text-gray-600">Trial includes Smart Card.</p>
                    <button className="text-blue-500">Learn More</button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">$0</span>
                    <Link href="/customise-your-card" className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center">
                      Continue <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-gray-50 text-gray-500">or</span>
                </div>
              </div>

              {/* Monthly Plan */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Pay Monthly - $10/seat/mo</h4>
                  </div>
                  <Link href="/customise-your-card" className="bg-white text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition flex items-center">
                    Continue <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Option */}
            <div className="mt-8 bg-gray-800 text-white rounded-lg p-6">
              <h4 className="text-xl font-medium">Enterprise</h4>
              <p className="mb-4">A secure, customizable, and integrated solution tailored to meet the needs of large organizations.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
