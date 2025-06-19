import React from 'react'

const MySalary = () => {
  return (
    <div className="p-6 text-[12px]">
    <table className="w-full text-left border border-gray-300 focus:ring-0 focus:outline-none">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 border border-gray-300 focus:ring-0 focus:outline-none">Effective From</th>
          <th className="p-3 border border-gray-300 focus:ring-0 focus:outline-none">Monthly Salary</th>
          <th className="p-3 border border-gray-300 focus:ring-0 focus:outline-none">Yearly Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-3 border border-gray-300 focus:ring-0 focus:outline-none">Jun - 2024</td>
          <td className="p-3 border border-gray-300 focus:ring-0 focus:outline-none">INR 50,100.00</td>
          <td className="p-3 border border-gray-300 focus:ring-0 focus:outline-none">INR 601,200.00</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default MySalary
