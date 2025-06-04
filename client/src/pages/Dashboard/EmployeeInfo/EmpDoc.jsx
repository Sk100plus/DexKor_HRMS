// Document.jsx
import React from "react";
import { Eye, Download } from 'lucide-react'; // Assuming you're using lucide-react icons


  
const EmpDoc = () => {

    const documentsList = [
        { name: "Appointment Letter.pdf", key: "appointmentLetter" },
        { name: "Salary Slip_June.pdf", key: "salarySlipJune" },
        { name: "Salary Slip_May.pdf", key: "salarySlipMay" },
        { name: "Salary Slip_April.pdf", key: "salarySlipApril" },
        { name: "Relieving Letter.pdf", key: "relievingLetter" },
        { name: "Experience Letter.pdf", key: "experienceLetter" }
      ];
  return (
    
    <div className="p-8 max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {documentsList.map((doc) => (
        <div
          key={doc.key}
          className="flex justify-between items-center px-4 py-3  rounded-lg shadow-sm bg-white"
        >
          <p className="truncate max-w-[60%] font-medium text-gray-800">{doc.name}</p>
          <div className="flex gap-4 items-center text-gray-600">
            <Eye className="cursor-pointer hover:text-blue-600" size={20} />
            <Download className="cursor-pointer hover:text-blue-600" size={20} />
          </div>
        </div>
      ))}
    </div>
  
    
  </div>
  );
};

export default EmpDoc;
