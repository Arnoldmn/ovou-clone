"use client";
import "../../styles/globals.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const cardColors = {
  black: "/card-black.png",
  beige: "/card-beige.png",
  gold: "/card-gold.png",
  rainbow: "/card-rainbow.png",
  silver: "/card-silver.png",
};

const PricingCard = ({
  title,
  description,
  monthlyPrice,
  annualPrice,
  features,
}) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedColor, setSelectedColor] = useState("black");
  const toggleBilling = () => setIsAnnual(!isAnnual);

  return (
    <div className="border rounded-lg p-6 shadow-sm text-center bg-white">
      <h3 className="font-bold text-xl text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Color Selection Inside Plan */}
      <img
        src={cardColors[selectedColor]}
        alt="Selected Card"
        className="mx-auto mt-4 w-40 transition-opacity duration-300"
      />
      <div className="flex justify-center space-x-3 mt-4">
        {Object.keys(cardColors).map((color) => (
          <button
            key={color}
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === color ? "border-orange-500" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></button>
        ))}
      </div>

      {/* Pricing Toggle inside the Plan */}
      <div className="mt-4 flex justify-center items-center space-x-4">
        <span className="text-gray-600 font-medium">Monthly</span>
        <button
          className="relative w-14 h-7 bg-gray-300 rounded-full p-1 flex items-center transition-all"
          onClick={toggleBilling}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
              isAnnual ? "translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span className="text-orange-500 font-semibold">Annually</span>
        <span className="text-sm text-orange-500 ml-1">Save 30%</span>
      </div>

      {/* Pricing Display */}
      <p className="text-2xl font-bold mt-3 text-black">
        ${isAnnual ? annualPrice : monthlyPrice}/
        <span className="text-lg">{isAnnual ? "year" : "month"}</span>
      </p>

      <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
        Start 30-Day Trial
      </button>

      {/* HR Under Button to Separate Features */}
      <hr className="my-4 border-gray-200" />

      {/* Features List with HR Separators */}
      <div className="text-left text-gray-700 space-y-3">
        {features.map((feature, index) => (
          <div key={index}>
            <p className="font-medium">{feature}</p>
            {index < features.length - 1 && (
              <hr className="my-2 border-gray-200" />
            )}
          </div>
        ))}
      </div>

      {/* Final HR and "See all features" at Bottom */}
      <hr className="my-4 border-gray-200" />
      <a
        href="#"
        className="inline-block text-orange-500 font-semibold hover:underline"
      >
        See all features →
      </a>
    </div>
  );
};

const PricingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Profile Customization",
      content: "Details about customization features.",
    },
    {
      title: "Sharing Options",
      content: "Information about sharing with your team.",
    },
    {
      title: "Contact Management",
      content: "Manage and organize your contacts efficiently.",
    },
    {
      title: "Team Management",
      content: "Tools to streamline team collaboration.",
    },
    {
      title: "CRM Integration",
      content: "Integrate with your favorite CRM tools.",
    },
    {
      title: "Advanced Analytics",
      content: "Get insights into your card's performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-black">O V O U</h1>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            For Teams
          </a>
          <a href="#" className="text-gray-700 hover:text-black font-medium">
            Resources
          </a>
          <a href="/pricing" className="text-gray-700 hover:text-black font-medium">
            Pricing
          </a>
        </div>
        <div className="flex space-x-4">
          <button href="/login" className="text-gray-700 font-medium">Login</button>
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Smart Card Section */}
      <div className="max-w-5xl mx-auto text-center mt-10 px-5">
        <h2 className="text-4xl font-bold text-black">
          Smart Card Included with Your Plan
          <span className="text-orange-500">.</span>
        </h2>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
        <PricingCard
          title="Individual"
          description="Ideal for solopreneurs."
          monthlyPrice="12"
          annualPrice="99"
          features={[
            "Smart Card Included",
            "Basic Contact Management",
            "Limited Integrations",
            "No Team Collaboration",
          ]}
        />
        <PricingCard
          title="Teams"
          description="Perfect for client-facing teams."
          monthlyPrice="10"
          annualPrice="90"
          features={[
            "Smart Card Included",
            "Advanced Contact Management",
            "Full CRM Integrations",
            "Team Collaboration & Admin Controls",
          ]}
        />
      </div>
      <div className="max-w-6xl mx-auto mt-10 px-5">
        {/* Header & Plans */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-left text-4xl font-bold text-black">
              Compare Plans
            </h2>
            <p className="text-left text-gray-500 text-lg font-medium">
              Select the best plan for your business.
            </p>
          </div>

          <div className="flex gap-16">
            {/* Individual Plan */}
            <div className="text-center w-56">
              <p className="text-gray-500 text-lg font-medium">Individual</p>
              <p className="text-3xl font-bold text-black">
                $99<span className="text-lg font-medium">/year</span>
              </p>
              <button className="mt-3 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                Get Started
              </button>
            </div>

            {/* Teams Plan */}
            <div className="text-center w-56">
              <p className="text-gray-500 text-lg font-medium">Teams</p>
              <p className="text-3xl font-bold text-black">
                $90<span className="text-lg font-medium">/seat/year</span>
              </p>
              <button className="mt-3 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="mt-10 space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <FaChevronDown
                  className={`text-orange-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Feature Comparison Table */}
      <div className="max-w-4xl mx-auto mt-8 border rounded-lg overflow-hidden bg-white">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Features</th>
              <th className="p-4 text-center">Individual</th>
              <th className="p-4 text-center">Teams</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Smart Card Included", "✔", "✔"],
              ["Custom Branding", "✔", "✔"],
              ["Team Management", "✖", "✔"],
              ["CRM Integration", "✖", "✔"],
              ["Advanced Analytics", "✖", "✔"],
            ].map(([feature, individual, teams], index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{feature}</td>
                <td className="p-4 text-center">{individual}</td>
                <td className="p-4 text-center">{teams}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingPage;
