// AnnouncementComponent.jsx
import React from 'react';

const AnnouncementComponent = () => {
  const announcements = [
    {
      id: 1,
      title: 'Important Update',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget odio nec urna eleifend hendrerit.',
      date: '2024-01-03',
    },
    {
      id: 2,
      title: 'Upcoming Event',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      date: '2024-01-10',
    },
    // Add more announcements as needed
  ];

  const featuredAnnouncement = announcements[0]; // Assuming the first announcement is featured

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      {/* Featured Announcement */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Announcement</h2>
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-2xl font-bold mb-2">{featuredAnnouncement.title}</h3>
          <p className="text-gray-700 mb-4">{featuredAnnouncement.content}</p>
          <p className="text-sm text-gray-500">Date: {featuredAnnouncement.date}</p>
        </div>
      </div>

      {/* Recent Announcements */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Recent Announcements</h2>
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-gray-100 p-6 rounded-md mb-4">
            <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
            <p className="text-gray-700 mb-4">{announcement.content}</p>
            <p className="text-sm text-gray-500">Date: {announcement.date}</p>
          </div>
        ))}
      </div>

      {/* View All Announcements */}
      <div className="mt-8 text-center">
        <button className="bg-primary-color text-white px-6 py-2 rounded-md hover:bg-opacity-80 focus:outline-none">
          View All Announcements
        </button>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
