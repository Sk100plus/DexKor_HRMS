// Document.jsx
import React from "react";

const Document = ({ documents, handleFileChange,handleCancel,handleNext3 }) => {
  return (
    
    <div className="p-8  max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      {/* Upload Appointment Letter */}
      <div>
        <p className="text-lg font-semibold mb-2">Upload Appointment Letter</p>
        <div className="border-2 border-dotted border-blue-400 rounded-lg flex flex-col items-center justify-center h-40 p-4">
          <label className="cursor-pointer">
            <input
              onChange={(e) => handleFileChange(e, "appointmentLetter")}
              type="file"
              accept=".jpeg,.jpg,.pdf"
              className="hidden"
            />
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-3xl mb-2">⭳</div>
              <p>
                Drag & Drop or <span className="text-blue-600 font-medium">choose file</span> to upload
              </p>
              <p className="text-sm text-gray-400 mt-1">Supported formats : Jpeg, pdf</p>
            </div>
          </label>
          {documents.appointmentLetter && (
            <p className="mt-2 text-sm text-green-600">{documents.appointmentLetter.name}</p>
          )}
        </div>
      </div>

      {/* Upload Salary Slips */}
      <div>
        <p className="text-lg font-semibold mb-2">Upload Salary Slips</p>
        <div className="border-2 border-dotted border-blue-400 rounded-lg flex flex-col items-center justify-center h-40 p-4">
          <label className="cursor-pointer">
            <input
              onChange={(e) => handleFileChange(e, "salarySlips")}
              type="file"
              accept=".jpeg,.jpg,.pdf"
              className="hidden"
            />
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-3xl mb-2">⭳</div>
              <p>
                Drag & Drop or <span className="text-blue-600 font-medium">choose file</span> to upload
              </p>
              <p className="text-sm text-gray-400 mt-1">Supported formats : Jpeg, pdf</p>
            </div>
          </label>
          {documents.salarySlips && (
            <p className="mt-2 text-sm text-green-600">{documents.salarySlips.name}</p>
          )}
        </div>
      </div>

      {/* Upload Relieving Letter */}
      <div>
        <p className="text-lg font-semibold mb-2">Upload Relieving Letter</p>
        <div className="border-2 border-dotted border-blue-400 rounded-lg flex flex-col items-center justify-center h-40 p-4">
          <label className="cursor-pointer">
            <input
              onChange={(e) => handleFileChange(e, "relievingLetter")}
              type="file"
              accept=".jpeg,.jpg,.pdf"
              className="hidden"
            />
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-3xl mb-2">⭳</div>
              <p>
                Drag & Drop or <span className="text-blue-600 font-medium">choose file</span> to upload
              </p>
              <p className="text-sm text-gray-400 mt-1">Supported formats : Jpeg, pdf</p>
            </div>
          </label>
          {documents.relievingLetter && (
            <p className="mt-2 text-sm text-green-600">{documents.relievingLetter.name}</p>
          )}
        </div>
      </div>

      {/* Upload Experience Letter */}
      <div>
        <p className="text-lg font-semibold mb-2">Upload Experience Letter</p>
        <div className="border-2 border-dotted border-blue-400 rounded-lg flex flex-col items-center justify-center h-40 p-4">
          <label className="cursor-pointer">
            <input
              onChange={(e) => handleFileChange(e, "experienceLetter")}
              type="file"
              accept=".jpeg,.jpg,.pdf"
              className="hidden"
            />
            <div className="flex flex-col items-center text-center">
              <div className="text-blue-600 text-3xl mb-2">⭳</div>
              <p>
                Drag & Drop or <span className="text-blue-600 font-medium">choose file</span> to upload
              </p>
              <p className="text-sm text-gray-400 mt-1">Supported formats : Jpeg, pdf</p>
            </div>
          </label>
          {documents.experienceLetter && (
            <p className="mt-2 text-sm text-green-600">{documents.experienceLetter.name}</p>
          )}
        </div>
      </div>
      
    </div>
       <div className="flex justify-end gap-4">
       <button
         className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
         onClick={handleCancel}
       >
         Cancel
       </button>
       <button
         className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
         onClick={handleNext3}
       >
         Next
       </button>
     </div>
     </div>
  );
};

export default Document;
