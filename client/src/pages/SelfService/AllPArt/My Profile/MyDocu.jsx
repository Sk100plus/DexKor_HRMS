import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MyDocu = () => {
  const [activeTab, setActiveTab] = useState('pro');
  const [isModalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [documentsByTab, setDocumentsByTab] = useState({
    pro: [],
    letters: [],
  });

  const tabs = [
    { label: 'PRO', value: 'pro' },
    { label: 'HR Policy', value: 'policy' },
    { label: 'Letters', value: 'letters' },
    { label: 'Documents', value: 'docs' },
  ];

  const handleAddDocument = (doc) => {
    setDocumentsByTab((prev) => {
      const updatedDocs = [...(prev[activeTab] || [])];
      if (editIndex !== null) {
        updatedDocs[editIndex] = doc; // update
      } else {
        updatedDocs.push(doc); // insert
      }
      return {
        ...prev,
        [activeTab]: updatedDocs,
      };
    });
    setModalOpen(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedDocs = [...(documentsByTab[activeTab] || [])];
    updatedDocs.splice(index, 1);
    setDocumentsByTab((prev) => ({
      ...prev,
      [activeTab]: updatedDocs,
    }));
  };

  const renderTable = () => {
    const currentDocs = documentsByTab[activeTab] || [];

    return (
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full text-sm font-sans border-collapse">
          <thead className="bg-blue-50 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-2">Document Type</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Document</th>
              <th className="px-4 py-2">History</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentDocs.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                      alt="No Result"
                      className="w-12 h-12 opacity-40"
                    />
                    No Result Found..!
                  </div>
                </td>
              </tr>
            ) : (
              currentDocs.map((doc, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{doc.type}</td>
                  <td className="px-4 py-2">{doc.expiry}</td>
                  <td className="px-4 py-2">{doc.status}</td>
                  <td className="px-4 py-2">{doc.fileName}</td>
                  <td className="px-4 py-2">—</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-blue-600 hover:underline cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:underline cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

  const getInitialFormData = () => {
    if (editIndex !== null) {
      return documentsByTab[activeTab][editIndex];
    }
    return {
      type: '',
      expiry: '',
      status: '',
      fileName: '',
    };
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Documents</h2>
        {(activeTab === 'pro' || activeTab === 'letters') && (
          <Button
            onClick={() => {
              setEditIndex(null); // clear edit
              setModalOpen(true);
            }}
            size="icon"
            variant="outline"
            className="rounded-full"
          >
            <Plus size={18} />
          </Button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setActiveTab(tab.value);
              setEditIndex(null);
            }}
            className={`pb-2 text-sm font-medium cursor-pointer mb-2 ${
              activeTab === tab.value
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {renderTable()}

      {/* Modal */}
      {isModalOpen && (
        <AddProForm
          onClose={() => {
            setModalOpen(false);
            setEditIndex(null);
          }}
          onSubmit={handleAddDocument}
          initialData={getInitialFormData()}
        />
      )}
    </div>
  );
};

const AddProForm = ({ onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.type && form.expiry && form.status && form.fileName) {
      onSubmit(form);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className=" select-none fixed inset-0 bg-transparent flex items-center justify-center z-50 select-none">
      <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg space-y-4">
        <h3 className="text-lg font-semibold">Add / Edit Document</h3>
        <input
          type="text"
          name="type"
          placeholder="Document Type"
          className="w-full border px-3 py-2 rounded-lg shadow-sm border-gray-300"
          value={form.type}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expiry"
          className="w-full border px-3 py-2 rounded-lg shadow-sm border-gray-300"
          value={form.expiry}
          onChange={handleChange}
        />
        <select
          name="status"
          className="w-full border px-3 py-2 rounded-lg shadow-sm border-gray-300"
          value={form.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Expired">Expired</option>
        </select>
        <input
          type="text"
          name="fileName"
          placeholder="File Name (e.g., pro_doc.pdf)"
          className="w-full border px-3 py-2 rounded-lg shadow-sm border-gray-300"
          value={form.fileName}
          onChange={handleChange}
        />

        <div className="flex justify-end gap-2">
          <Button onClick={onClose} variant="outline" className="cursor-pointer">Close</Button>
          <Button onClick={handleSubmit} className="cursor-pointer">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default MyDocu;
