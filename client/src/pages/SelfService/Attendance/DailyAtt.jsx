import React, { useState } from "react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Dummy attendance data
const getStatusForDate = (date) => {
  const day = date.getDate();
  const weekDay = date.getDay();

  if (weekDay === 0) return { status: "Week Off", checkIn: "-", checkOut: "-", hours: "00 hrs 00 mins" };
  if (day % 5 === 0) return { status: "Absent", checkIn: "-", checkOut: "-", hours: "00 hrs 00 mins" };
  return { status: "Present", checkIn: "09:15 AM", checkOut: "06:00 PM", hours: "08 hrs 45 mins" };
};

const DailyAtt = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [year] = useState(2025);
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, year);
    const firstDay = daysInMonth[0].getDay();
    const totalCells = firstDay + daysInMonth.length;
    const calendar = [];

    for (let i = 0; i < totalCells; i++) {
      if (i < firstDay) {
        calendar.push(<div key={`empty-${i}`} className="border h-20"></div>);
      } else {
        const day = daysInMonth[i - firstDay];
        const { status } = getStatusForDate(day);
        calendar.push(
          <div
            key={day.toDateString()}
            className={`border h-20 p-1 text-center cursor-pointer ${selectedDate?.toDateString() === day.toDateString() ? 'bg-blue-100' : ''}`}
            onClick={() => setSelectedDate(day)}
          >
            <div className="font-medium">{day.getDate()}</div>
            <div className={`text-xs ${status === "Absent" ? "text-red-600" : status === "Week Off" ? "text-gray-500" : "text-green-600"}`}>
              {status}
            </div>
          </div>
        );
      }
    }

    return calendar;
  };

  const getCheckInOutDetails = () => {
    if (!selectedDate) return null;
    const { checkIn, checkOut, hours, status } = getStatusForDate(selectedDate);

    return (
      <div className="border rounded-md p-4 shadow-md">
        <h2 className="font-semibold text-lg mb-2">Check In/Out details</h2>
        <p><strong>Date:</strong> {selectedDate.toDateString()}</p>
        <p><strong>Check-In:</strong> {checkIn}</p>
        <p><strong>Check-Out:</strong> {checkOut}</p>
        <p><strong>In Hours:</strong> {hours}</p>
        <p><strong>Status:</strong> {status}</p>
        <button className="text-blue-600 mt-2 hover:underline">View Logs</button>
      </div>
    );
  };

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/4">
        {/* Month Selector */}
        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm font-medium">Select Month:</label>
          <select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(parseInt(e.target.value));
              setSelectedDate(null);
            }}
            className="border px-3 py-1 rounded"
          >
            {months.map((month, idx) => (
              <option key={month} value={idx}>
                {month}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-600">Year: {year}</span>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 text-center font-semibold text-gray-700 mb-2">
          {days.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {renderCalendar()}
        </div>
      </div>

      {/* Side Pane */}
      <div className="w-full md:w-1/4">{getCheckInOutDetails()}</div>
    </div>
  );
};

export default DailyAtt;
