import React, { useState } from "react";

const USATax = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const [step, setStep] = useState(1);

  const handleFormSelect = (formCode) => {
    setSelectedForm(formCode);
    setStep(1);
  };

  const forms = [
    { name: "Form W-9 (Rev. October 2018)", code: "W9" },
    { name: "Form 8233 Exemption From Withholding", code: "8233" },
    { name: "Form 941 Employer’s QUARTERLY Federal Tax Return", code: "941" },
    { name: "Form 1099 - Nonemployee Compensation(NEC) (Rev. January 2024)", code: "1099" },
    { name: "Form I-9 Employment Eligibility Verification Department of Homeland Security", code: "I9" },
  ];

  const renderStep = () => {
    if (step === 1) {
      return (
        <div className="text-[13px]">
          <h3 className="text-lg font-semibold mb-4">Step 1: Form</h3>
          <label className="block mb-2 font-medium">Name (as shown on your income tax return) *</label>
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="Enter Name" />

          <label className="block mb-2 font-medium">Business name (if different)</label>
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="Enter Business Name" />

          <label className="block mb-2 font-medium">Tax Classification</label>
          <div className="flex flex-wrap gap-4 mb-4">
            {["Individual / Sole proprietor", "C Corporation", "S Corporation", "Partnership", "LLC", "Others"].map(
              (type) => (
                <label key={type}>
                  <input type="radio" name="tax" className="mr-1" /> {type}
                </label>
              )
            )}
          </div>

          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="Exempt payee code (Optional)" />
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="Exemption from FATCA reporting code (Optional)" />
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="Address (Optional)" />
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="City, State, ZIP (Optional)" />
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="List account number(s) (Optional)" />
          <input className="w-full p-2 shadow-sm border border-gray-300 focus:ring-0 focus:outline-none mb-4" placeholder="Requester's name and address (Optional)" />
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="text-[13px]">
          <h3 className="text-lg font-semibold mb-4">Step 2: TIN</h3>
          <p className="mb-4">
            Enter your Taxpayer Identification Number (TIN). This is usually your Social Security Number (SSN).
          </p>
          <div className="mb-4">
            <label className="mr-4">
              <input type="radio" name="idType" defaultChecked className="mr-1" />
              Social Security Number
            </label>
            <label>
              <input type="radio" name="idType" className="mr-1" />
              Employer Identification Number
            </label>
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength="1"
                className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 w-10 text-center"
                placeholder="-"
              />
            ))}
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="text-[13px]">
          <h3 className="text-lg font-semibold mb-4">Step 3: Certification</h3>
          <p className="mb-4">
            Under penalties of perjury, I certify that:
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li>The number shown on this form is my correct taxpayer identification number.</li>
              <li>
                I am not subject to backup withholding due to exemption or no notification from the IRS.
              </li>
              <li>I am a U.S. citizen or other U.S. person.</li>
              <li>
                The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA
                reporting is correct.
              </li>
            </ol>
          </p>
          <label className="block font-medium mb-2">Upload Signature</label>
          <input type="file" className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none p-2 mb-4 w-full" />
        </div>
      );
    }
  };

  return (
    <div className="p-4 text-[13px]">
      {!selectedForm ? (
        <div>
          <h2 className="text[15px] font-bold mb-4">USA Tax Forms</h2>
          <table className="w-full shadow-sm border border-gray-300 focus:ring-0 focus:outline-none">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Form Name</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form, index) => (
                <tr key={index} className="shadow-sm border border-gray-300 focus:ring-0 focus:outline-none-t">
                  <td className="p-2">{form.name}</td>
                  <td className="p-2 text-blue-600 cursor-pointer hover:text-blue-700" onClick={() => handleFormSelect(form.code)}>
                    Submit Form
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            Form W-9 (Rev. October 2018) - Step {step} of 3
          </h2>

          {renderStep()}

          <div className="flex justify-between mt-6">
            <button
              onClick={() => {
                if (step === 1) setSelectedForm(null);
                else setStep(step - 1);
              }}
              className="bg-gray-300 cursor-pointer hover:bg-gray-400 px-4 py-2 rounded"
            >
              Prev
            </button>

            {step < 3 ? (
              <button onClick={() => setStep(step + 1)} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded">
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  alert("Form Submitted Successfully!");
                  setSelectedForm(null);
                }}
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default USATax;
