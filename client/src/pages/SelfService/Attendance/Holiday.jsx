import React, { useState } from "react";

// Holiday data by year
const holidaysByYear = {
  2021: [
    { date: "January 1, 2021", day: "Friday", name: "New Year", type: "Gazetted Holiday" },
    { date: "August 15, 2021", day: "Sunday", name: "Independence Day", type: "Gazetted Holiday" },
  ],
  2022: [
    { date: "January 26, 2022", day: "Wednesday", name: "Republic Day", type: "Gazetted Holiday" },
    { date: "October 2, 2022", day: "Sunday", name: "Gandhi Jayanti", type: "Gazetted Holiday" },
  ],
  2023: [
    { date: "January 1, 2023", day: "Sunday", name: "New Year", type: "Gazetted Holiday" },
    { date: "December 25, 2023", day: "Monday", name: "Christmas", type: "Gazetted Holiday" },
  ],
  2024: [
    { date: "January 1, 2024", day: "Monday", name: "New Year", type: "Gazetted Holiday" },
    { date: "April 9 - April 10, 2024", day: "Tuesday - Wednesday", name: "Eid al-Fitr", type: "Gazetted Holiday" },
    { date: "December 25, 2024", day: "Wednesday", name: "Christmas Day", type: "Gazetted Holiday" },
  ],
  2025: [
    { date: "January 26, 2025", day: "Sunday", name: "Republic Day", type: "Gazetted Holiday" },
    { date: "August 15, 2025", day: "Friday", name: "Independence Day", type: "Gazetted Holiday" },
  ],
};

const Holiday = () => {
  const years = [2021, 2022, 2023, 2024, 2025];
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <div className="p-6">
      {/* Title and Location */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Holiday</h1>
        <div className="text-sm text-gray-600  px-3 py-1 rounded">HO - IND - Delhi</div>
      </div>

      {/* Year Selector */}
      <div className="flex items-center justify-center mb-4 space-x-4">
        <label htmlFor="year" className="text-sm font-medium text-gray-600">Select Year:</label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          className=" px-3 py-1 rounded text-sm"
        >
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Holiday Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm  -gray-300 focus:ring-0 focus:outline-none">
        <table className="min-w-full ">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm uppercase">
            <tr>
              <th className="px-4 py-2 ">Date</th>
              <th className="px-4 py-2 ">Day</th>
              <th className="px-4 py-2 ">Holiday</th>
              <th className="px-4 py-2 ">Type of Holiday</th>
            </tr>
          </thead>
          <tbody className="text-sm ">
            {(holidaysByYear[selectedYear] || []).map((holiday, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 ">{holiday.date}</td>
                <td className="px-4 py-2 ">{holiday.day}</td>
                <td className="px-4 py-2 ">{holiday.name}</td>
                <td className="px-4 py-2 ">{holiday.type}</td>
              </tr>
            ))}
            {(holidaysByYear[selectedYear] || []).length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-4">No holidays found for {selectedYear}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holiday;
