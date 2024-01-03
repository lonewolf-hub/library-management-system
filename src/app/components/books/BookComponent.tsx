// BookComponent.jsx
import React from 'react';

const BookComponent = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-secondary-color shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-4">Book Details</h2>
      <div className="flex">
        <div className="w-1/3">
          <img
            src="/assets/images/trending1.jpg"  
            alt="Book Cover"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div className="w-2/3 ml-8">
          <h3 className="text-2xl font-bold mb-2">Book Title</h3>
          <p className="text-lg text-gray-700 mb-4">Author: Author Name</p>
          <p className="text-lg mb-4">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio nec urna eleifend hendrerit.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-primary-color">$19.99</p>
            <button className="bg-primary-color text-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
