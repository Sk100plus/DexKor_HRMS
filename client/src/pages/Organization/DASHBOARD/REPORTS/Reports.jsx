import React, { useState } from 'react';

const Reports = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  const allReports = {
    employeeInfo: [
      "Employee Directory Report",
      "Contact Information Report",
      "Employment History Report",
      "Compensation Report"
    ],
    demography: [
      "Age Distribution Report",
      "Gender Diversity Report",
      "Ethnicity Report",
      "Location Distribution Report"
    ],
    joinsExit: [
      "New Hire Report",
      "Turnover Analysis",
      "Exit Interview Summary",
      "Retention Statistics"
    ],
    tickets: [
      "Closed Ticket Report",
      "Employee Raised Ticket Report",
      "Ticket Volume Reports",
      "Tickets Response Time Reports",
      "Tickets Analysis Reports",
      "Tickets Department Reports",
      "Tickets Feedback Reports"
    ],
    policy: [
      "Policy Acknowledgment Report",
      "Training Completion Report",
      "Compliance Violations",
      "Policy Update History"
    ],
    login: [
      "Login Activity Report",
      "Failed Login Attempts",
      "Profile Update History",
      "Account Status Report"
    ],
    analytics: [
      "Productivity Metrics",
      "Workforce Planning",
      "Skill Gap Analysis",
      "Performance Trends"
    ],
    assets: [
      "Asset Allocation Report",
      "Equipment Inventory",
      "Software Licenses",
      "Maintenance Records"
    ]
  };

  const sections = [
    { key: "employeeInfo", label: "Employee Info Reports" },
    { key: "demography", label: "Employee Demography Reports" },
    { key: "joinsExit", label: "New Joins & Exit" },
    { key: "tickets", label: "Tickets Report" },
    { key: "policy", label: "Employee Policy Reports" },
    { key: "login", label: "Login And Profile Reports" },
    { key: "analytics", label: "Workforce Analytics" },
    { key: "assets", label: "Asset Reports" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" mx-auto bg-white rounded-none shadow-sm p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {sections.slice(0, 4).map((section) => (
              <div 
                key={section.key} 
                className={`border bg-blue-50 border-gray-200 rounded-md transition-all ${
                  expandedSection === section.key ? 'shadow-md' : ''
                }`}
              >
                <div
                  className={`p-2 flex justify-between items-center cursor-pointer ${
                    expandedSection === section.key ? 'bg-gray-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleSection(section.key)}
                >
                  <h3 className="font-medium">{section.label}</h3>
                  <span className="text-gray-500">
                    {expandedSection === section.key ? '▼' : '►'}
                  </span>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedSection === section.key ? 'max-h-[300px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-2 pt-0 max-h-[250px] overflow-y-auto">
                    {allReports[section.key].map((report, index) => (
                      <div
                        key={index}
                        className="p-3 my-1 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer border-b border-gray-100 last:border-0"
                      >
                        {report}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {sections.slice(4).map((section) => (
              <div 
                key={section.key} 
                className={`border bg-blue-50 border-gray-200 rounded-md transition-all ${
                  expandedSection === section.key ? 'shadow-md' : ''
                }`}
              >
                <div
                  className={`p-2 flex justify-between items-center cursor-pointer ${
                    expandedSection === section.key ? 'bg-gray-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => toggleSection(section.key)}
                >
                  <h3 className="font-medium">{section.label}</h3>
                  <span className="text-gray-500">
                    {expandedSection === section.key ? '▼' : '►'}
                  </span>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedSection === section.key ? 'max-h-[300px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-2 pt-0 max-h-[250px] overflow-y-auto">
                    {allReports[section.key].map((report, index) => (
                      <div
                        key={index}
                        className="p-3 my-1 text-sm text-gray-700 hover:bg-blue-50 rounded cursor-pointer border-b border-gray-100 last:border-0"
                      >
                        {report}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;