import React, { useState } from "react";
import { Plus, Download, File } from "lucide-react";
import { Input } from "@/components/ui/input";

const HRLetter = () => {
  const [activeTab, setActiveTab] = useState("Manage Letters");

  const tabs = ["Manage Letters", "Manage Signatures"];

  const renderTabContent = () => {
    return (
      <div className="pt-4">
        <div className="mt-4 border border-gray-300 rounded-lg shadow-sm">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <span className="font-bold text-[11px]">{activeTab}</span>
            <div className="flex gap-2 items-center">
              <div className="relative">
                <Input
                  placeholder="Search"
                  className="h-8 w-48 pl-3 text-[10px] border border-gray-300 rounded-full"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 border border-gray-300 rounded-full">
                <File size={16} />
              </button>
              <button className="p-2 hover:bg-gray-100 border border-gray-300 rounded-full">
                <Plus size={16} />
              </button>
              <button className="p-2 hover:bg-gray-100 border border-gray-300 rounded-full">
                <Download size={16} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-100 text-[10px] text-left">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Added By</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center text-gray-500">
                  <td colSpan="4" className="py-10">
                    <div className="flex flex-col items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/7486/7486800.png"
                        alt="No data"
                        className="w-16 h-16 opacity-40"
                      />
                      <p className="mt-2 text-sm">No Result Found..!</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end items-center p-3 text-sm text-gray-600">
            <span className="mr-2">Items per page:</span>
            <select className="border border-gray-300 rounded-lg px-2 py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span className="mx-4">0 of 0</span>
            <button disabled className="px-2 text-gray-300">{`<`}</button>
            <button disabled className="px-2 text-gray-300">{`>`}</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="flex space-x-4 border-b border-gray-200 pb-2 font-medium">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[10px] cursor-pointer pb-1 border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
};

export default HRLetter;