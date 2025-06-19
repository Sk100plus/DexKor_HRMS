import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import Profile from '../Dashboard/Profile';
import Navbar from '../Navbar/Navbar';

const Holidays = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const holidaysPerPage = 7;

  const [holidays, setHolidays] = useState([
    { date: 'January 01, 2023', day: 'Tuesday', name: 'New Year' },
    { date: 'January 07, 2023', day: 'Saturday', name: "International Programmers' Day" },
    { date: 'February 04, 2023', day: 'Saturday', name: 'World Cancer Day' },
    { date: 'April 01, 2023', day: 'Saturday', name: 'April Fool Day' },
    { date: 'May 07, 2023', day: 'Monday', name: "International Programmers' Day" },
    { date: 'May 22, 2023', day: 'Tuesday', name: 'International Day for Biological Diversity' },
    { date: 'June 05, 2023', day: 'Monday', name: 'International Day for Biological Diversity' },
    { date: 'August 07, 2023', day: 'Monday', name: 'International Friendship Day' },
    { date: 'December 25, 2023', day: 'Monday', name: 'Christmas Day' },
    { date: 'November 14, 2023', day: 'Tuesday', name: 'Children\'s Day' },
  ]);

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return {
      date: dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
      }),
      day: dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
      }),
    };
  };

  const addHoliday = () => {
    if (!holidayName || !holidayDate) return;

    const { date, day } = formatDate(holidayDate);
    const newHoliday = { date, day, name: holidayName };
    setHolidays([...holidays, newHoliday]);

    setHolidayName('');
    setHolidayDate('');
    setIsModalOpen(false);
  };

  // 🔍 Filter holidays by search query
  const filteredHolidays = holidays.filter(holiday =>
    holiday.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 📄 Pagination
  const indexOfLastHoliday = currentPage * holidaysPerPage;
  const indexOfFirstHoliday = indexOfLastHoliday - holidaysPerPage;
  const currentHolidays = filteredHolidays.slice(indexOfFirstHoliday, indexOfLastHoliday);
  const totalPages = Math.ceil(filteredHolidays.length / holidaysPerPage);

  return (
    <div className='font-sans select-none'>
      <div><Profile /></div>

      <div className="w-full min-h-screen select-none flex">
        <div><Navbar /></div>

        <div className="bg-white rounded-xl mx-3 my-3 shadow border border-gray-200 w-full">
          <div className="flex justify-between items-center mb-6 m-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-800">🎉 Holidays</h1>
              <p className="text-sm text-gray-500">All Holiday Lists</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              + Add New Holiday
            </button>
          </div>

          <div className="p-4">
            {/* 🔍 Search Input */}
            <input
              type="text"
              placeholder="Search by Holiday Name"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // reset to first page on search
              }}
              className="py-2 m-2 pl-2 w-1/3 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
            />

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow mt-4">
              <table className="min-w-full divide-y divide-gray-100 text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                  <tr>
                    <th className="px-6 py-3 text-left">📅 Date</th>
                    <th className="px-6 py-3 text-left">🗓️ Day</th>
                    <th className="px-6 py-3 text-left">🎈 Holiday Name</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {currentHolidays.length > 0 ? (
                    currentHolidays.map((holiday, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-blue-50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">{holiday.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{holiday.day}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{holiday.name}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center px-6 py-4 text-gray-400">
                        No holidays found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* 📄 Pagination Controls */}
            {totalPages > 1 && (
  <div className="flex justify-center mt-6 space-x-2 items-center">
    
    {/* Left Arrow */}
    <button
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className={`px-3 py-1 rounded-md text-sm border cursor-pointer ${
        currentPage === 1
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      ‹
    </button>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-3 py-1 rounded-md text-sm border cursor-pointer ${
          currentPage === i + 1
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        {i + 1}
      </button>
    ))}

    {/* Right Arrow */}
    <button
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`px-3 py-1 rounded-md text-sm border cursor-pointer ${
        currentPage === totalPages
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white text-gray-700 hover:bg-gray-100'
      }`}
    >
      ›
    </button>
  </div>
)}

          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6 border border-gray-200 pointer-events-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Holiday</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Holiday Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={holidayName}
                onChange={(e) => setHolidayName(e.target.value)}
              />
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={holidayDate}
                  onChange={(e) => setHolidayDate(e.target.value)}
                />
                <CalendarDays className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={addHoliday}
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Holidays;
