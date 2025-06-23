import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch"; // If using a custom Switch
import { Eye, EyeOff } from "lucide-react";

const SMTPConf = () => {
  const [enabled, setEnabled] = useState(false);
  const [formData, setFormData] = useState({
    serverName: "",
    portNumber: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6">

      {/* Toggle */}
      <div className="mb-6">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            className="h-5 w-5"
          />
          <span className="text-sm font-medium">Enable/Disable SMTP Server</span>
        </label>
        <p className="text-xs text-gray-500 mt-1">
          Set up your SMTP server to enable/disable email notifications.
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Server Name *</label>
          <Input
            name="serverName"
            placeholder="Enter Server Name"
            value={formData.serverName}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none "
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Port Number *</label>
          <Input
            name="portNumber"
            placeholder="Enter Port Number"
            value={formData.portNumber}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none "
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Username *</label>
          <Input
            name="username"
            placeholder="Enter Email"
            value={formData.username}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none "
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password *</label>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="shadow-sm border border-gray-300 rounded-lg focus:ring-0 focus:outline-none "
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-gray-500"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-1 bg-gray-200 text-sm rounded hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SMTPConf;
