import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const [formData, setFormData] = useState({
    task: "",
    priority: "Low",
    description: "",
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = formData;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, formData]);
    }

    setFormData({
      task: "",
      priority: "Low",
      description: "",
      status: "Pending",
    });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setFormData(tasks[index]);
    setEditingIndex(index);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks =
    filterStatus === "All"
      ? tasks
      : tasks.filter((task) => task.status === filterStatus);

  const priorityColor = {
    Low: "bg-green-300",
    Medium: "bg-blue-400",
    High: "bg-red-400",
    Critical: "bg-yellow-400",
  };

  return (
    <div className="p-4 text-[13px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-1 rounded"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          onClick={() => {
            setFormData({
              task: "",
              priority: "Low",
              description: "",
              status: "Pending",
            });
            setIsEditing(false);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add
        </button>
      </div>

      {/* Task Table */}
      <div className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none rounded-md overflow-x-auto">
        <div className="grid grid-cols-5 bg-gray-100 text-sm font-semibold px-4 py-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-b">
          <div>Task</div>
          <div>Priority</div>
          <div>Description</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        {filteredTasks.length === 0 ? (
          <div className="text-center py-10 text-gray-400">No Tasks Found</div>
        ) : (
          filteredTasks.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-5 px-4 py-2 text-sm shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-t items-center"
            >
              <div>{item.task}</div>
              <div>
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${priorityColor[item.priority]}`}
                >
                  {item.priority}
                </span>
              </div>
              <div>{item.description}</div>
              <div>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-yellow-200 text-yellow-800">
                  {item.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-600 underline text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 underline text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Task" : "Add New Task"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Task Name"
                value={formData.task}
                onChange={(e) =>
                  setFormData({ ...formData, task: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
                required
              />
              <select
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
              />
              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none px-3 py-2 rounded"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {isEditing ? "Update Task" : "Add Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
