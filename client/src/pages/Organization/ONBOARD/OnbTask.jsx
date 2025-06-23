import React, { useState } from "react";

const OnbTask = () => {
  const [entities, setEntities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    task: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...entities];
      updated[editingIndex] = formData;
      setEntities(updated);
      setEditingIndex(null);
    } else {
      setEntities([...entities, formData]);
    }
    setFormData({ name: "", mail: "", task: "" });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(entities[index]);
    setShowForm(true);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg min-h-screen">
      {/* Table */}
      <div className="pt-4">
        <div className="border border-gray-300 rounded overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50 text-[10px]">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Mail</th>
                <th className="p-2 text-left">Task</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((ent, index) => (
                <tr key={index} className="hover:bg-gray-50 text-[11px]">
                  <td
                    className="p-2 text-blue-600 underline cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    {ent.name}
                  </td>
                  <td className="p-2">{ent.mail}</td>
                  <td className="p-2">{ent.task}</td>
                </tr>
              ))}
              {entities.length === 0 && (
                <tr>
                  <td colSpan={3} className="p-4 text-center text-gray-400">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Form Popup */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <form
              onSubmit={handleSubmit}
              className="bg-white w-[90%] max-w-2xl p-6 rounded shadow-lg grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block mb-1 text-sm font-medium">Name*</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Mail*</label>
                <input
                  name="mail"
                  value={formData.mail}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-1 text-sm font-medium">Task*</label>
                <input
                  name="task"
                  value={formData.task}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded px-2 py-1"
                />
              </div>
              <div className="col-span-2 flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnbTask;
