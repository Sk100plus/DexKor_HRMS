import React, { useState } from 'react';
import { Download } from 'lucide-react'
import { Input } from "@/components/ui/input";

const Prob = () => {
  const [activeTab, setActiveTab] = useState('In Probation');
  const [probationType, setProbationType] = useState('');
  const [policyName, setPolicyName] = useState('6-Month Probation');
  const [feedbackQuestions, setFeedbackQuestions] = useState([
    { id: '1.0.1', question: '', isEditing: false },
    { id: '2.0.2', question: '', isEditing: false },
    { id: '3.0.3', question: '', isEditing: false },
    { id: '4.0.4', question: '', isEditing: false },
  ]);
  const [newQuestion, setNewQuestion] = useState('');

  const tabClass = (tab) =>
    `cursor-pointer px-4 py-2 border-b-2 font-medium ${
      activeTab === tab
        ? 'border-blue-700 text-blue-700'
        : 'border-transparent text-gray-600 hover:text-blue-600'
    }`;

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const newId = `${feedbackQuestions.length + 1}.0.${feedbackQuestions.length + 1}`;
      setFeedbackQuestions([
        ...feedbackQuestions,
        { id: newId, question: newQuestion, isEditing: false }
      ]);
      setNewQuestion('');
    }
  };

  const handleEditQuestion = (id) => {
    setFeedbackQuestions(feedbackQuestions.map(q => 
      q.id === id ? { ...q, isEditing: !q.isEditing } : q
    ));
  };

  const handleUpdateQuestion = (id, updatedQuestion) => {
    setFeedbackQuestions(feedbackQuestions.map(q => 
      q.id === id ? { ...q, question: updatedQuestion, isEditing: false } : q
    ));
  };

  return (
    <div className="p-4  bg-gray-50 min-h-screen">
      {/* Tabs */}
      <div className="flex gap-4 text-[10px] shadow-xl border border-gray-100 focus:ring-0 focus:outline-none mb-6">
        <div className={tabClass('In Probation')} onClick={() => setActiveTab('In Probation')}>
          In Probation
        </div>
        <div className={tabClass('Probation Policy')} onClick={() => setActiveTab('Probation Policy')}>
          Probation Policy
        </div>
        <div className={tabClass('Probation Feedback Questions')} onClick={() => setActiveTab('Probation Feedback Questions')}>
          Probation Feedback Questions
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'In Probation' && (
        <>
          {/* Filter Dropdown */}
          <div className=" text-[13px] bg-white rounded shadow p-4 mb-4">
            <div className="w-full md:w-72">
              <label className="block mb-1 font-medium text-gray-600">Probation Type</label>
              <select
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-0"
                value={probationType}
                onChange={(e) => setProbationType(e.target.value)}
              >
                <option value="">Select Probation Type</option>
                <option value="initial">Initial Probation</option>
                <option value="extended">Extended Probation</option>
              </select>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded shadow p-4">
            {/* Top Right Actions */}
            <div className="flex justify-end items-center mb-2  pr-2">
              <button className="text-gray-500 hover:text-black">
              <Input
      placeholder="Search"
      className="pl-2 w-1/3 ml-90  rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"/>
              </button>
              <button className="text-gray-500 rounded-full  p-2 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <Download size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto text-[13px]">
              <table className="min-w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-200 ">
                <thead className="bg-gray-100 text-[13px]">
                  <tr>
                    <th className="px-4 py-2 text-left ">Employee Name</th>
                    <th className="px-4 py-2 text-left">Job Title</th>
                    <th className="px-4 py-2 text-left">Department</th>
                    <th className="px-4 py-2 text-left">Legal Entity</th>
                    <th className="px-4 py-2 text-left">Date Of Joining</th>
                    <th className="px-4 py-2 text-left">Probation End Date</th>
                    <th className="px-4 py-2 text-left">Reporting To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="7" className="py-10 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <div className="text-[13px] mb-2">📄🔍</div>
                        <p>No Result Found..!</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 px-2 text-gray-600 text-[13px]">
              <div>
                Items per page:
                <select className="ml-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300 rounded px-2 py-1 focus:outline-none">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
              <div>
                0 of 0
                <button className="ml-4 px-2 py-1 rounded shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">←</button>
                <button className="ml-2 px-2 py-1 rounded shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-300">→</button>
              </div>
            </div>
          </div>
        </>
      )}

{activeTab === 'Probation Policy' && (
  <div className="bg-white p-4 rounded shadow text-[13px]">
    <h2 className="font-semibold mb-4">Probation Policy</h2>

    <div className="flex justify-end mb-2 gap-2">
    <button className="text-gray-500 hover:text-black">
              <Input
      placeholder="Search"
      className="pl-2 w-1/3 ml-90  rounded-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"/>
              </button>
              <button className="text-gray-500 rounded-full  p-3 bg-gray-300 hover:bg-gray-400 cursor-pointer  hover:text-black">
              <Download size={15} className="text-gray-700 hover:text-black" title="Download" />
              </button>
    </div>

    <div className="overflow-x-auto">
      <table className="min-w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-gray-200 ">
        <thead className="bg-gray-100 text-[13px]">
          <tr>
            <th className="px-4 py-2 text-left">Probation Policy Name</th>
            <th className="px-4 py-2 text-left">Probation Period</th>
            <th className="px-4 py-2 text-left">Created By</th>
            <th className="px-4 py-2 text-left">Modified By</th>
            <th className="px-4 py-2 text-left">Default</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none  text-[13px]">
            <td className="px-4 py-2">6 Months Probation</td>
            <td className="px-4 py-2">6 - month</td>
            <td className="px-4 py-2">Richard Samuel</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">✅</td>
            <td className="px-4 py-2 flex gap-2">
              <button className="text-blue-600 hover:underline">✏️</button>
              <button className="text-gray-700 hover:text-black">⋮</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="flex justify-between items-center mt-4 text-[13px] text-gray-600 ">
      <div>
        Items per page:
        <select className="ml-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>
      <div>
        1 - 1 of 1
        <button className="ml-4 px-2 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">←</button>
        <button className="ml-2 px-2 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">→</button>
      </div>
    </div>
  </div>
)}


{activeTab === 'Probation Feedback Questions' && (
  <div className="bg-white p-4 rounded shadow text-[13px]">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold">Probation Feedback Questions</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-3 py-1 "
        />
        <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 ">
          + Add Question
        </button>
      </div>
    </div>

    <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none border-dashed border-gray-300 rounded py-20 text-center text-gray-500 ">
      No feedback questions found.
    </div>

    <div className="flex justify-between items-center mt-4  text-gray-600">
      <div>
        Items per page:
        <select className="ml-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1">
          <option>5</option>
          <option>10</option>
        </select>
      </div>
      <div>
        0 of 0
        <button className="ml-4 px-2 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">←</button>
        <button className="ml-2 px-2 py-1 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded">→</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Prob;