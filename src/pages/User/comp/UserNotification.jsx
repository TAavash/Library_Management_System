// src/components/Notifications.js
import React from 'react';

const notifications = [
  {
    id: 1,
    message: 'You have a new friend request from John Doe.',
    time: '2 mins ago',
  },
  {
    id: 2,
    message: 'Your order has been shipped.',
    time: '1 hour ago',
  },
  {
    id: 3,
    message: 'You have a new message from Jane Smith.',
    time: '3 hours ago',
  },
];

const UserNotification = ({ toggleNotificationPanel }) => {
  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform">
      <div className="p-4 relative">
        <button
          className="absolute top-2 right-2 p-1 rounded-full text-gray-500 hover:text-black"
          onClick={toggleNotificationPanel}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h3 className="text-lg font-semibold">Notifications</h3>
        <div className="mt-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="border-b border-gray-200 p-4">
              <p className="text-gray-800">{notification.message}</p>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserNotification;
