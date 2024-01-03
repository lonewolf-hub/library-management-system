// Home.tsx
import React from 'react';

const Home: React.FC = () => {
  const trendingBooks = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Trending Book ${index + 1}`,
    imageUrl: `/assets/images/trending${index + 1}.jpg`,
  }));

  const exploreBooks = Array.from({ length: 6 }, (_, index) => ({
    id: index + 7,
    title: `Explore Book ${index + 1}`,
    imageUrl: `/assets/images/explore${index + 1}.jpg`,
  }));

  return (
    <div className="bg-secondary-color">
    {/* Full-width Banner */}
<div className="h-60 bg-cover bg-center relative overflow-hidden animate-library">
  <img
    src="/assets/icon/banner.jpg"  
    alt="Library Banner"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="absolute inset-0 flex items-center justify-center text-white">
    <h1 className="text-5xl font-bold tracking-wide">Welcome to Our Library</h1>
  </div>
</div>


      {/* Trending and Explore Books Section */}
      <div className="my-12 px-4">
        {/* Trending Books Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Trending Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingBooks.map((book) => (
              <div key={book.id} className="flex flex-col items-center">
                <img src={book.imageUrl} alt={book.title} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-lg font-semibold">{book.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Books Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Explore Books Based on Your Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exploreBooks.map((book) => (
              <div key={book.id} className="flex flex-col items-center">
                <img src={book.imageUrl} alt={book.title} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-lg font-semibold">{book.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

   
      {/* Newsletter Section */}
      <div className="bg-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6">Stay updated with the latest news, events, and book releases. Subscribe now!</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-400 px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-primary-color text-white px-6 py-2 rounded-r-md hover:bg-opacity-80 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
