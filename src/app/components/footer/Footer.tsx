import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Footer = () => {
  const footerLinks = [
    {
      title: "Explore",
      links: [
        "New Arrivals",
        "Best Sellers",
        "E-Library",
        "Special Collections",
        "Book Clubs",
      ],
    },
    {
      title: "Genres",
      links: [
        "Fiction",
        "Non-Fiction",
        "Science Fiction",
        "Mystery",
        "Biography",
      ],
    },
    {
      title: "Services",
      links: [
        "Book Rentals",
        "E-Book Downloads",
        "Library Memberships",
        "Events",
        "Support",
      ],
    },
    {
      title: "Connect",
      links: [
        "Facebook",
        "Instagram",
        "Twitter",
        "Newsletter",
        "Contact Us",
      ],
    },
  ];

  return (
    <footer className="bg-blue-900 text-white p-6">
      <div className="flex justify-center items-center mb-4">
        <p className="mr-4">Connect with us on Social Media</p>
        <div className="flex">
          <FaFacebook className="text-2xl mx-2" />
          <FaInstagram className="text-2xl mx-2" />
          <FaTwitter className="text-2xl mx-2" />
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-4 text-white">
        {footerLinks.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col mx-4">
            {column.title && <h3 className="text-lg font-semibold mb-2">{column.title}</h3>}
            {column.links.map((link, linkIndex) => (
              <div key={linkIndex} className="flex items-center my-3">
                <a href={`/library/${link}`} className="text-white text-xs lg:text-base hover:text-gray-300">
                  {link}
                </a>
                <FiChevronDown className="ml-2" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-white mt-6 pt-4 flex justify-center">
        <p className="text-sm">&copy; 2023 by www.LibraryApp.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
