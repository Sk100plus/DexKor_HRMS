import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import Profile from '../Dashboard/Profile';
import Navbar from '../Navbar/Navbar';

const Holidays = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [holidays, setHolidays] = useState([
    { date: 'January 01, 2023', day: 'Tuesday', name: 'New Year' },
    { date: 'January 07, 2023', day: 'Saturday', name: "International Programmers' Day" },
    { date: 'February 04, 2023', day: 'Saturday', name: 'World Cancer Day' },
    { date: 'April 01, 2023', day: 'Saturday', name: 'April Fool Day' },
    { date: 'May 07, 2023', day: 'Monday', name: "International Programmers' Day" },
    { date: 'May 22, 2023', day: 'Tuesday', name: 'International Day for Biological Diversity' },
    { date: 'June 05, 2023', day: 'Monday', name: 'International Day for Biological Diversity' },
    { date: 'August 07, 2023', day: 'Monday', name: 'International Friendship Day' },
    { date: 'September 15, 2023', day: 'Friday', name: 'International Day of Democracy' },
    { date: 'November 14, 2023', day: 'Tuesday', name: 'World Diabetes Day' },
    { date: 'December 25, 2023', day: 'Monday', name: 'Merry Christmas' },
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

  return (
   <div className='p-6 min-h-screen font-sans select-none flex '>

    <Navbar/>
    <div className="p-6 w-full select-none ">
      <div className='mb-5'>
      <Profile/>
      </div>
      
      

      <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden ">
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
            onChange={(e) => setSearchQuery(e.target.value)}
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
                {filteredHolidays.length > 0 ? (
                  filteredHolidays.map((holiday, idx) => (
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
    </div>
  );
};

export default Holidays;
