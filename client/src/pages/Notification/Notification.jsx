import React from "react";
import { Bell, Search, Sun, Moon } from "lucide-react";
import Profile from "../Dashboard/Profile";

const notifications = [
  {
    id: 1,
    title: "Leave Request",
    message: "Robert Fox has applied for leave",
    time: "Just Now",
    avatar: "🟠",
  },
  {
    id: 2,
    title: "Check In Issue",
    message: "@Alex shared a message regarding check in issue",
    time: "11:10 AM",
    avatar: "🔵",
  },
  {
    id: 3,
    title: 'Applied job for "Sales Manager" Position',
    message: "@shane Watson has applied for job",
    time: "09:00 AM",
    avatar: "🟣",
  },
  {
    id: 4,
    title: "Robert Fox has shared his feedback",
    message: '“It was an amazing experience with your organisation”',
    time: "Yesterday",
    avatar: "🟤",
  },
  {
    id: 5,
    title: "Password Update successfully",
    message: "Your password has been updated successfully",
    time: "Yesterday",
    avatar: "🟢",
  },
];

const Notification = () => {
  return (
    <div className="p-6 ml-80 min-h-screen  transition-colors select-none">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow px-6 py-6">
        <Profile/>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-10 mb-10">
            Notifications
          </h2>
        {/* Notifications List */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="flex items-start justify-between py-4"
            >
              <div className="flex items-start gap-4">
                <div className="text-xl">{note.avatar}</div>
                <div>
                  <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                    {note.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {note.message}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-400">{note.time}</div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Notification;
