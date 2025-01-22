// pages/about.js
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* About Us Heading */}
        <h1 className="text-4xl font-bold text-center text-yellow-800 mb-8">About Us</h1>

        {/* Purpose Section */}
        <div className="bg-slate-50 shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Purpose of the Blog</h2>
          <p className="text-gray-600 leading-relaxed">
            This blog is dedicated to uncovering the hidden beauty of Pakistan northern areas. 
            We aim to provide authentic travel guides, cultural insights, and tips to inspire 
            adventurers to explore responsibly while connecting with the rich heritage of the region.
          </p>
        </div>

        {/* Vision and Mission Section */}
        <div className="bg-white shadow-md text-yellow-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold  mb-4">Vision & Mission</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>Promote sustainable tourism in the northern areas of Pakistan.</li>
            <li>Preserve the cultural and natural heritage of these regions.</li>
            <li>Build a community of travelers who share a passion for exploration.</li>
          </ul>
        </div>

        {/* Visuals Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Visuals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Visual with caption and hover animation */}
            <div className="relative group">
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/hunza-naltar-valley.png"
                  alt="Hunza Valley"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/hunza-naltar-valley.png"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-medium">Naltar Valley</p>
            </div>

            <div className="relative group">
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/fairy-meadow.png"
                  alt="Fairy Meadows"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/fairy-meadow.png"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-medium">Fairy Meadows</p>
            </div>

            <div className="relative group">
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/skardu.png"
                  alt="Skardu"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/skardu.png"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-medium">Skardu</p>
            </div>

            <div className="relative group">
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/khunjerab pass.png"
                  alt="Khunjerab Pass"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/khunjerab pass.png"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-medium">Khunjerab Pass</p>
            </div>

            <div className="relative group">
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/naran-kaghan.png"
                  alt="Naran Kaghan"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/naran-kaghan.png"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-medium">Naran Kaghan</p>
            </div>

            <div className="relative group">
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/ratti-gali.png"
                  alt="Ratti Gali Lake"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="/images/ratti-gali.png"
                />
              </div>
              <p className="text-center text-gray-700 mt-2 font-medium">Ratti Gali Lake</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
