import React, { useState } from 'react';

const CompOff = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewDetailsId, setViewDetailsId] = useState(null);
  const [compOffData, setCompOffData] = useState([
    {
      id: 1,
      category: 'Cryptization',
      compOffDate: '14/08/2024',
      status: 'Approved',
      approver: 'John Doe',
      appliedOn: '10/08/2024 10:30 AM',
      approvedOn: '12/08/2024 09:15 AM',
      reason: 'Worked extra hours on project deadline'
    },
    {
      id: 2,
      category: 'Attendance',
      compOffDate: '28/08/2024',
      status: 'Pending',
      approver: '-',
      appliedOn: '25/08/2024 04:45 PM',
      reason: 'Attended weekend training session'
    },
    {
      id: 3,
      category: 'Appraisal',
      compOffDate: '29/08/2024',
      status: 'Rejected',
      approver: 'Jane Smith',
      appliedOn: '20/08/2024 09:15 AM',
      rejectedOn: '22/08/2024 03:30 PM',
      rejectionReason: 'Insufficient work hours',
      reason: 'Compensatory leave request'
    }
  ]);

  const [formData, setFormData] = useState({
    category: 'Cryptization',
    compOffDate: '',
    reason: ''
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
    
    const newCompOff = {
      id: compOffData.length + 1,
      category: formData.category,
      compOffDate: formData.compOffDate.split('-').reverse().join('/'),
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
      reason: formData.reason
    };

    setCompOffData([...compOffData, newCompOff]);
    setShowAddForm(false);
    setFormData({
      category: 'Cryptization',
      compOffDate: '',
      reason: ''
    });
  };

  const handleViewDetails = (id) => {
    setViewDetailsId(id);
  };

  const handleCloseDetails = () => {
    setViewDetailsId(null);
  };

  const filteredData = filterStatus === 'All' 
    ? compOffData 
    : compOffData.filter(item => item.status === filterStatus);

  const selectedCompOff = viewDetailsId 
    ? compOffData.find(item => item.id === viewDetailsId) 
    : null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">RapidHR</h1>
      
      {!viewDetailsId ? (
        <>
          <h2 className="text-xl font-semibold mb-6">My Comp-Off Request History</h2>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              
              <div>
                <label className="block mb-1 font-medium">Filter by Status</label>
                <select 
                  className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
            <button
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowAddForm(true)}
            >
              Add New
            </button>
          </div>

          <table className="min-w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
            <thead className="bg-gray-100">
              <tr>
                <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Category</th>
                <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Comp-Off Date</th>
                <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Status</th>
                <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Approver</th>
                <th className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.id}>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.category}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.compOffDate}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                    <div className="flex items-center gap-1">
                      <span className={`inline-block w-3 h-3 rounded-full ${
                        item.status === 'Pending' ? 'bg-yellow-500' : 
                        item.status === 'Approved' ? 'bg-blue-500' : 'bg-red-500'
                      }`}></span>
                      {item.status}
                    </div>
                  </td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">{item.approver}</td>
                  <td className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-4 py-2">
                    <button
                      onClick={() => handleViewDetails(item.id)}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="text-center py-4 text-gray-500">No records found.</div>
          )}

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">
              Items per page: 10
            </div>
            <div className="text-sm text-gray-600">
              1 - {filteredData.length} of {filteredData.length}
            </div>
          </div>

          {/* Add Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4">Add Comp-Off Request</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label className="block mb-1 font-medium">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                        required
                      >
                        <option value="Cryptization">Cryptization</option>
                        <option value="Attendance">Attendance</option>
                        <option value="Appraisal">Appraisal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Comp-Off Date *</label>
                      <input
                        type="date"
                        name="compOffDate"
                        value={formData.compOffDate}
                        onChange={handleInputChange}
                        className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Reason (Optional)</label>
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                        rows="3"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 cursor-pointer"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-6">Comp-Off Request Details</h2>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-gray-600">Request ID</p>
                <p className="font-medium">{selectedCompOff.id}</p>
              </div>
              <div>
                <p className="text-gray-600">Category</p>
                <p className="font-medium">{selectedCompOff.category}</p>
              </div>
              <div>
                <p className="text-gray-600">Comp-Off Date</p>
                <p className="font-medium">{selectedCompOff.compOffDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-medium flex items-center gap-1">
                  <span className={`inline-block w-3 h-3 rounded-full ${
                    selectedCompOff.status === 'Pending' ? 'bg-yellow-500' : 
                    selectedCompOff.status === 'Approved' ? 'bg-blue-500' : 'bg-red-500'
                  }`}></span>
                  {selectedCompOff.status}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Applied On</p>
                <p className="font-medium">{selectedCompOff.appliedOn}</p>
              </div>
              <div>
                <p className="text-gray-600">Approver</p>
                <p className="font-medium">{selectedCompOff.approver}</p>
              </div>
              {selectedCompOff.approvedOn && (
                <div>
                  <p className="text-gray-600">Approved On</p>
                  <p className="font-medium">{selectedCompOff.approvedOn}</p>
                </div>
              )}
              {selectedCompOff.rejectedOn && (
                <div>
                  <p className="text-gray-600">Rejected On</p>
                  <p className="font-medium">{selectedCompOff.rejectedOn}</p>
                </div>
              )}
              <div className="col-span-2">
                <p className="text-gray-600">Reason</p>
                <p className="font-medium">{selectedCompOff.reason || '-'}</p>
              </div>
              {selectedCompOff.rejectionReason && (
                <div className="col-span-2">
                  <p className="text-gray-600">Rejection Reason</p>
                  <p className="font-medium text-red-500">{selectedCompOff.rejectionReason}</p>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleCloseDetails}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
              >
                Back 
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CompOff;