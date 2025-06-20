import React, { useState } from 'react';
import { FiExternalLink, FiMessageSquare, FiSearch } from 'react-icons/fi';

const Help = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [activeTab, setActiveTab] = useState('Ticket History');
  const [closingReason, setClosingReason] = useState('');
  const [closingRemarks, setClosingRemarks] = useState('');
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const [selectedQuestion, setSelectedQuestion] = useState('Select Question');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Tab state
  const [activeViewTab, setActiveViewTab] = useState('All Tickets');

  const tickets = [
    {
      id: 1,
      category: 'Payroll and Compensation',
      grievance: 'Salary and Bonuses',
      title: 'Training Program Enrollment',
      requestedBy: 'Richard Samuel',
      description:
        'The Training Program Enrollment form serves as a formal registration mechanism for employees who wish to enroll in specific training programs offered by the organization.',
      priority: 'Medium',
      status: 'Closed',
      archivedBy: 'Admin',
      closedBy: 'Manager',
    },
    {
      id: 2,
      category: 'Payroll and Compensation',
      grievance: 'Salary and Bonuses',
      title: 'IT Support Ticket',
      requestedBy: 'Richard Samuel',
      description: 'Requesting support for IT issue.',
      priority: 'High',
      status: 'Pending',
      archivedBy: '',
      closedBy: '',
    },
    {
      id: 3,
      category: 'Others/others',
      grievance: 'Others/others',
      title: 'Expense Reimbursement Request',
      requestedBy: 'Richard Samuel',
      description: 'Need reimbursement for travel expenses.',
      priority: 'Low',
      status: 'Pending',
      archivedBy: '',
      closedBy: '',
    },
  ];

  // Filter logic
  const filteredTickets = tickets.filter(ticket => {
    // Apply view tab filter first
    if (activeViewTab === 'My Tickets' && ticket.requestedBy !== 'Richard Samuel') {
      return false;
    }
    if (activeViewTab === 'Follow Up' && ticket.status !== 'Pending') {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'Select Category' && selectedCategory !== 'All' && 
        ticket.category !== selectedCategory) {
      return false;
    }
    
    // Question filter (using title as question in this example)
    if (selectedQuestion !== 'Select Question' && selectedQuestion !== 'All' && 
        ticket.title !== selectedQuestion) {
      return false;
    }
    
    // Status filter
    if (selectedStatus !== 'All' && ticket.status !== selectedStatus) {
      return false;
    }
    
    // Search filter
    if (searchQuery && 
        !ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !ticket.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  // Get unique categories and questions for dropdowns
  const categories = ['All', ...new Set(tickets.map(ticket => ticket.category))];
  const questions = ['All', ...new Set(tickets.map(ticket => ticket.title))];
  const statuses = ['All', 'Pending', 'Closed'];

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleOpenCloseForm = (ticket) => {
    setSelectedTicket(ticket);
    setShowCloseModal(true);
  };

  const handleCloseFormSubmit = () => {
    if (!closingReason || !closingRemarks) {
      alert('Please fill all fields');
      return;
    }
    alert(`Ticket closed with reason: ${closingReason} and remarks: ${closingRemarks}`);
    setShowCloseModal(false);
    setClosingReason('');
    setClosingRemarks('');
  };

  const resetFilters = () => {
    setSelectedCategory('Select Category');
    setSelectedQuestion('Select Question');
    setSelectedStatus('All');
    setSearchQuery('');
  };

  return (
    <div className="p-6 text-[13px]">
      <h2 className=" font-semibold mb-4">Help Desk Tickets</h2>

      {/* Filter controls */}
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded overflow-hidden">
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 outline-none"
          >
            <option value="Select Category">Select Category</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded overflow-hidden">
          <select 
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
            className="px-3 py-2 outline-none"
          >
            <option value="Select Question">Select Question</option>
            {questions.map(question => (
              <option key={question} value={question}>{question}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded overflow-hidden">
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 outline-none"
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <button 
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Reset
        </button>

        <div className="flex items-center bg-white shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonerounded overflow-hidden ml-auto">
          <input
            type="text"
            placeholder="Q search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 outline-none"
          />
          <FiSearch className="mx-2 text-gray-500" />
        </div>
      </div>

      {/* View tabs - All Tickets/Follow Up/My Tickets */}
      <div className="flex shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4">
        {['All Tickets', 'Follow Up', 'My Tickets'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 ${activeViewTab === tab ? 'border-b-2 border-black font-medium' : 'text-gray-500'}`}
            onClick={() => setActiveViewTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table - Different columns based on active tab */}
      {activeViewTab === 'All Tickets' ? (
        <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-noneborder-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Grievance Category</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Grievance</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Title</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Requested By</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.category}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.grievance}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.title}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.requestedBy}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.status}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-noneflex gap-2">
                    <FiExternalLink
                      className="cursor-pointer"
                      onClick={() => handleViewDetails(ticket)}
                      title="View Details"
                    />
                    <FiMessageSquare
                      className="cursor-pointer"
                      onClick={() => handleOpenCloseForm(ticket)}
                      title="Close Ticket"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No tickets found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-noneborder-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Category</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Question</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Title</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Requested By</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Status</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Archived By</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Closed By</th>
              <th className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.category}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.grievance}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.title}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.requestedBy}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.status}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.archivedBy || '-'}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">{ticket.closedBy || '-'}</td>
                  <td className="p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-noneflex gap-2">
                    <FiExternalLink
                      className="cursor-pointer"
                      onClick={() => handleViewDetails(ticket)}
                      title="View Details"
                    />
                    <FiMessageSquare
                      className="cursor-pointer"
                      onClick={() => handleOpenCloseForm(ticket)}
                      title="Close Ticket"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-4 text-center text-gray-500">
                  No Result Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {/* Ticket Detail Modal */}
      {selectedTicket && !showCloseModal && (
        <div className="fixed inset-0  bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[70%] rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-2 right-3 cursor-pointer text-gray-600 text-xl font-bold"
              onClick={() => setSelectedTicket(null)}
            >
              ×
            </button>

            <h3 className="text-lg font-semibold mb-4">Ticket Details</h3>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div><strong>Requested By:</strong> {selectedTicket.requestedBy}</div>
              <div><strong>Priority:</strong> {selectedTicket.priority}</div>
              <div><strong>Grievance Category:</strong> {selectedTicket.category}</div>
              <div><strong>Status:</strong> {selectedTicket.status}</div>
              <div><strong>Grievance Raised:</strong> {selectedTicket.grievance}</div>
              <div><strong>Attachment:</strong> -</div>
            </div>

            <div className="mb-4">
              <strong>Description:</strong>
              <p className="text-gray-700 mt-1">{selectedTicket.description}</p>
            </div>

            <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 flex gap-4">
              {['Ticket History', 'Feedback'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none ${
                    activeTab === tab ? 'v font-semibold' : 'border-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-4 text-gray-600">
              {activeTab === 'Ticket History' ? 'No Histories Found!' : 'No Feedback Yet!'}
            </div>
          </div>
        </div>
      )}

      {/* Close Ticket Modal */}
      {showCloseModal && (
        <div className="fixed inset-0  bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <h3 className="text-lg font-semibold mb-4 text-center">Close Tickets</h3>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Closing Reason *</label>
              <select
                value={closingReason}
                onChange={(e) => setClosingReason(e.target.value)}
                className="w-full p-2 cursor-pointer shadow-sm border border-gray-300 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
              >
                <option value="">Select Close Reason</option>
                <option value="Issue Resolved">Issue Resolved</option>
                <option value="Duplicate">Duplicate</option>
                <option value="Invalid Request">Invalid Request</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Closing Remarks *</label>
              <input
                type="text"
                value={closingRemarks}
                onChange={(e) => setClosingRemarks(e.target.value)}
                className="w-full shadow-sm border border-gray-300 p-2 focus:ring-0 focus:outline-nonepx-3 py-2 rounded"
                placeholder="Enter Closing Remarks"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 border hover:text-white rounded-none cursor-pointer hover:bg-gray-600"
                onClick={() => {
                  setShowCloseModal(false);
                  setClosingReason('');
                  setClosingRemarks('');
                }}
              >
                Close
              </button>
              <button
                className="px-4 py-2 border hover:bg-blue-600 hover:text-white rounded-none cursor-pointer"
                onClick={handleCloseFormSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;