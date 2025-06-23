import React, { useState } from "react";
import { Plus, Folder, Download, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const AllSurveys = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    surveyName: "",
    categoryName: "",
    startDate: "",
    endDate: "",
    surveyStatus: "",
    publicationStatus: "",
    addedBy: "",
    externalUserUpload: false,
    surveyQuestions: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...data];
      updated[editingIndex] = formData;
      setData(updated);
      setEditingIndex(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({
      surveyName: "",
      categoryName: "",
      startDate: "",
      endDate: "",
      surveyStatus: "",
      publicationStatus: "",
      addedBy: "",
      externalUserUpload: false,
      surveyQuestions: "",
    });
    setShowForm(false);
  };

  const handleEdit = (idx) => {
    setEditingIndex(idx);
    setFormData(data[idx]);
    setShowForm(true);
  };

  const handleDelete = (idx) => {
    setData(data.filter((_, i) => i !== idx));
  };

  const filteredData = data.filter((row) =>
    row.surveyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Surveys</h2>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search Survey Name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-2 w-64 rounded-full shadow-sm border border-gray-300"
          />
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-500 hover:text-white">
            <Folder size={15} />
          </button>
          <button
            className="border border-gray-300 p-2 rounded-full hover:bg-blue-500 hover:text-white"
            onClick={() => {
              setFormData({
                surveyName: "",
                categoryName: "",
                startDate: "",
                endDate: "",
                surveyStatus: "",
                publicationStatus: "",
                addedBy: "",
                externalUserUpload: false,
                surveyQuestions: "",
              });
              setEditingIndex(null);
              setShowForm(true);
            }}
          >
            <Plus size={16} />
          </button>
          <button className="border border-gray-300 p-2 rounded-full hover:bg-gray-500 hover:text-white">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-xs text-left">
            <tr>
              <th className="p-2">Survey Name</th>
              <th className="p-2">Category Name</th>
              <th className="p-2">Start Date</th>
              <th className="p-2">End Date</th>
              <th className="p-2">Survey Status</th>
              <th className="p-2">Publication Status</th>
              <th className="p-2">Added By</th>
              <th className="p-2">External User Upload</th>
              <th className="p-2">Survey Questions</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2">{row.surveyName}</td>
                  <td className="p-2">{row.categoryName}</td>
                  <td className="p-2">{row.startDate}</td>
                  <td className="p-2">{row.endDate}</td>
                  <td className="p-2">{row.surveyStatus}</td>
                  <td className="p-2">{row.publicationStatus}</td>
                  <td className="p-2">{row.addedBy}</td>
                  <td className="p-2">{row.externalUserUpload ? "Yes" : "No"}</td>
                  <td className="p-2">{row.surveyQuestions}</td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="p-4 text-center text-gray-400">
                  No surveys found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-white w-[90%] max-w-lg p-6 rounded shadow-lg space-y-4"
          >
            <div>
              <label className="block text-sm mb-1">Survey Name*</label>
              <input
                name="surveyName"
                value={formData.surveyName}
                onChange={handleInputChange}
                required
                className="w-full border px-2 py-1 rounded border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Category Name*</label>
              <input
                name="categoryName"
                value={formData.categoryName}
                onChange={handleInputChange}
                required
                className="w-full border px-2 py-1 rounded border-gray-300"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm mb-1">Start Date*</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-full border px-2 py-1 rounded border-gray-300"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm mb-1">End Date*</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                  className="w-full border px-2 py-1 rounded border-gray-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Survey Status*</label>
              <input
                name="surveyStatus"
                value={formData.surveyStatus}
                onChange={handleInputChange}
                required
                className="w-full border px-2 py-1 rounded border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Publication Status*</label>
              <input
                name="publicationStatus"
                value={formData.publicationStatus}
                onChange={handleInputChange}
                required
                className="w-full border px-2 py-1 rounded border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Added By*</label>
              <input
                name="addedBy"
                value={formData.addedBy}
                onChange={handleInputChange}
                required
                className="w-full border px-2 py-1 rounded border-gray-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="externalUserUpload"
                checked={formData.externalUserUpload}
                onChange={handleInputChange}
                id="externalChk"
                className="h-4 w-4"
              />
              <label htmlFor="externalChk" className="text-sm">
                External User Upload
              </label>
            </div>
            <div>
              <label className="block text-sm mb-1">Survey Questions*</label>
              <textarea
                name="surveyQuestions"
                value={formData.surveyQuestions}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full border px-2 py-1 rounded border-gray-300"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AllSurveys;
