// Home.tsx
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  // Simulated data for trending books and explore books
  const trendingBooks = [
    { id: 1, title: 'Trending Book 1', imageUrl: '/images/trending1.jpg' },
    { id: 2, title: 'Trending Book 2', imageUrl: '/images/trending2.jpg' },
    { id: 3, title: 'Trending Book 3', imageUrl: '/images/trending3.jpg' },
    // Add more trending books as needed
  ];

  const exploreBooks = [
    { id: 4, title: 'Explore Book 1', imageUrl: '/images/explore1.jpg' },
    { id: 5, title: 'Explore Book 2', imageUrl: '/images/explore2.jpg' },
    { id: 6, title: 'Explore Book 3', imageUrl: '/images/explore3.jpg' },
    // Add more explore books as needed
  ];

  return (
    <div className="bg-gray-100">
      {/* Animated Library Image Banner */}
      <section className="h-96 bg-cover bg-center relative overflow-hidden animate-library">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Welcome to Our Library</h1>
        </div>
      </section>

      {/* Trending and Explore Books Section */}
      <section className="my-8">
        {/* Trending Books Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Trending Books</h2>
        </div>

        {/* Explore Books Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Explore Books Based on Your Interests</h2>
        </div>
      </section>

      {/* Rules and Policies Section */}
      <section className="my-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Rules and Policies</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio nec
          urna eleifend hendrerit.
        </p>
      </section>

      {/* Additional Sections */}
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
