"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../../public/hero-image.jpg"; // Replace with your actual image

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Smart Digital Business Cards | OVOU Alternative</title>
        <meta
          name="description"
          content="The Digital Business Card that captures leads, integrates with CRMs, and amplifies your brand."
        />
      </Head>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black bg-opacity-90">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">OVOU</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-300 hover:text-white">For Teams</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Resources</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
            {/* <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
            <Link href="/signup" className="bg-orange-500 px-4 py-2 rounded-md text-white">Signup</Link> */}
          </nav>
          <a href="/login" className="bg-orange-500 px-4 py-2 rounded-md text-white">Get Started</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-between px-6 md:px-16">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold leading-tight">
            Elevate Every <span className="text-orange-500">Introduction.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            The Digital Business Card that captures leads, integrates with CRMs, and amplifies your brand.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="bg-orange-500 px-6 py-3 text-white rounded-md">Try for free</a>
            <a href="#" className="border border-white px-6 py-3 rounded-md">Watch Video</a>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <Image src={heroImage} alt="Digital Business Card" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white">Why Choose Us?</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              { title: "Easy Sharing", desc: "Share your card with a tap, QR code, or link." },
              { title: "Customizable Design", desc: "Personalize your card to match your brand." },
              { title: "Analytics", desc: "Track interactions and engagement." },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="mt-2 text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white">What Our Users Say</h3>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              { name: "Alice Johnson", feedback: "This platform changed the way I network!" },
              { name: "Mark Williams", feedback: "Simple, elegant, and effective. Love it!" },
              { name: "Sophie Lee", feedback: "The best digital business card solution out there!" },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-lg shadow-md">
                <p className="italic text-gray-400">"{testimonial.feedback}"</p>
                <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} OVOU. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
