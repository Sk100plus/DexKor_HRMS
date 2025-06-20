import React, { useState } from "react";

import ReiReq from "./ReiReq";
import LoanReq from "./LoanReq";
import LoanRep from "./LoanRep";
import SalaAdv from "./SalaAdv";
import SalAdvRe from "./SalAdvRe";

// import other components like DailyAttendance, Leave, etc.

const Main1 = () => {
  const tabs = [
    "Reimbursement Requests",
    "Loan Requests",
    "Loan Repayment Requests",
    "Salary Advance Requests",
    "Salary Advance Repayment Requests",
  ];

  const [activeTab, setActiveTab] = useState("Reimbursement Requests");

  return (
    <div className="ml-3 select-none">
      {/* Horizontal Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 pb-2 font-medium">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` text-[10px] cursor-pointer pb-1 border-b-2 ${
              activeTab === tab
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {
            activeTab=="Reimbursement Requests"&&(
                <ReiReq/>
            )
        }
        {
            activeTab=="Loan Requests"&&(
                <LoanReq/>
            )
        }
          {
            activeTab=="Loan Repayment Requests"&&(
                <LoanRep/>
            )
        }
        {
          activeTab=="Salary Advance Requests"&&(
            <SalaAdv/>
          )
        }
        {
          activeTab=="Salary Advance Repayment Requests"&&(
            <SalAdvRe/>
          )
        }
      </div>
    </div>
  );
};

export default Main1;
