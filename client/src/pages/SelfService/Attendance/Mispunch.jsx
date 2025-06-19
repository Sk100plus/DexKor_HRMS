import React, { useState } from 'react';

const Mispunch = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPunch, setSelectedPunch] = useState(null);
  const [missedPunchData, setMissedPunchData] = useState([
    {
      id: 1,
      name: 'Organizer',
      punchDate: '25/08/2024',
      punchTime: '09:30',
      reason: 'Forgot to punch in',
      status: 'Pending',
      approver: '-',
      appliedOn: '28/08/2024 04:40 AM',
      approvalHistory: [
        {
          name: 'Richard Samuel',
          level: 'Level 1'
        }
      ]
    },
    {
      id: 2,
      name: 'Performance',
      punchDate: '27/08/2024',
      punchTime: '09:30',
      reason: 'System issue',
      status: 'Pending',
      approver: '-',
      appliedOn: '28/08/2024 04:40 AM',
      approvalHistory: []
    }
  ]);

  const [formData, setFormData] = useState({
    name: 'Organizer',
    punchDate: '',
    punchTime: '',
    reason: '',
    organization: 'Performance'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMissedPunch = {
      id: missedPunchData.length + 1,
      name: formData.name,
      punchDate: formData.punchDate.split('-').reverse().join('/'), // Convert YYYY-MM-DD to DD/MM/YYYY
      punchTime: formData.punchTime,
      reason: formData.reason,
      status: 'Pending',
      approver: '-',
      appliedOn: new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      organization: formData.organization,
      approvalHistory: []
    };

    setMissedPunchData([...missedPunchData, newMissedPunch]);
    setShowAddForm(false);
    setFormData({
      name: 'Organizer',
      punchDate: '',
      punchTime: '',
      reason: '',
      organization: 'Performance'
    });
  };

  const handleViewDetails = (punch) => {
    setSelectedPunch(punch);
  };

  const handleCloseDetails = () => {
    setSelectedPunch(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">RapidHR</h1>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Missed Punch Requests</h2>
        <button
          className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white px-4 py-2 rounded "
          onClick={() => setShowAddForm(true)}
        >
          Add New
        </button>
      </div>

      <table className="min-w-full ">
        <thead className="bg-gray-100">
          <tr>
            <th className=" px-4 py-2 text-left">Name</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Punch Date</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Punch Time</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Reason</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Status</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Applied On</th>
            <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {missedPunchData.map(item => (
            <tr key={item.id}>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.name}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.punchDate}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.punchTime}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.reason || '-'}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                <div className="flex items-center gap-1">
                  <span className={`inline-block w-3 h-3 rounded-full ${
                    item.status === 'Pending' ? 'bg-yellow-500' : 
                    item.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  {item.status}
                </div>
              </td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.appliedOn}</td>
              <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                <button
                  onClick={() => handleViewDetails(item)}
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {missedPunchData.length === 0 && (
        <div className="text-center py-4 text-gray-500">No records found.</div>
      )}

      {/* Add Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Missed Punch Request</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <select
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                    required
                  >
                    <option value="Organizer">Organizer</option>
                    <option value="Performance">Performance</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Missed Punch Date *</label>
                  <input
                    type="date"
                    name="punchDate"
                    value={formData.punchDate}
                    onChange={handleInputChange}
                    className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Missed Punch Time *</label>
                  <input
                    type="time"
                    name="punchTime"
                    value={formData.punchTime}
                    onChange={handleInputChange}
                    className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Reason *</label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                    rows="3"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {selectedPunch && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">Missed Punch Details</h2>
              <button
                onClick={handleCloseDetails}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Name</p>
                <p className="font-medium">{selectedPunch.name}</p>
              </div>
              <div>
                <p className="text-gray-600">Punch Date</p>
                <p className="font-medium">{selectedPunch.punchDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Punch Time</p>
                <p className="font-medium">{selectedPunch.punchTime}</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-medium flex items-center gap-1">
                  <span className={`inline-block w-3 h-3 rounded-full ${
                    selectedPunch.status === 'Pending' ? 'bg-yellow-500' : 
                    selectedPunch.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  {selectedPunch.status}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Applied On</p>
                <p className="font-medium">{selectedPunch.appliedOn}</p>
              </div>
              <div>
                <p className="text-gray-600">Approver</p>
                <p className="font-medium">{selectedPunch.approver}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600">Reason</p>
                <p className="font-medium">{selectedPunch.reason}</p>
              </div>
            </div>

            {selectedPunch.approvalHistory && selectedPunch.approvalHistory.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Approval History</h3>
                <table className="min-w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Name</th>
                      <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedPunch.approvalHistory.map((history, index) => (
                      <tr key={index}>
                        <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{history.name}</td>
                        <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{history.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={handleCloseDetails}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mispunch;