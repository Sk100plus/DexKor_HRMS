import React from 'react';

const sections = [
  {
    title: 'Basic Detail',
    fields: [
      'First Name', 'Last Name', 'Title', 'Employee Code', 'Date Of Birth', 'Gender',
      'Personal Mobile', 'Office Mobile', 'Personal Email', 'Office Email',
      'Blood Group', 'UID', 'Passport Number', 'Emirates ID', 'Martial Status',
    ],
  },
  {
    title: 'Address',
    fields: [
      'Present Address1', 'Present Address2', 'Permanent Address1', 'Permanent Address2',
      'City', 'State', 'ZipCode', 'Country',
    ],
  },
  {
    title: 'Bank',
    fields: ['Bank Name', 'IFSC Code', 'Account No', 'File No', 'Insurance No'],
  },
  {
    title: 'Family',
    fields: [],
  },
  {
    title: 'Education',
    fields: [],
  },
  {
    title: 'Work Profile',
    fields: [
      'Department', 'Designation', 'Location', 'Employee Type', 'Employee Status',
      'Shift', 'Role', 'Reporting To', 'Joining Date', 'Exit Date',
      'Notice Period', 'Probation From', 'Probation To', 'Confirmation Date',
      'Employee Working On Probation',
    ],
  },
  {
    title: 'Experience',
    fields: [],
  },
];

const AgencyEmp = () => {
  return (
    <div className="p-6 text-[13px]">
      <div className="space-y-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="shadow-sm border border-gray-300 rounded-none focus:ring-0 focus:outline-none border-gray-200 rounded-md shadow-sm bg-white"
          >
            <div className="px-4 py-3 font-semibold shadow-sm border border-gray-300 rounded-none focus:ring-0 focus:outline-none  bg-gray-100">
              {section.title}
            </div>
            {section.fields.length > 0 ? (
              <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
                {section.fields.map((field, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input type="checkbox" className="accent-blue-600 cursor-pointer" defaultChecked />
                    {field}
                  </label>
                ))}
              </div>
            ) : (
              <div className="p-4 text-gray-400  italic">No fields configured.</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgencyEmp;
