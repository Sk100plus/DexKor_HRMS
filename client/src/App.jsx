import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Attendance from "./pages/Attendance/Attendance.jsx";
import AllDept from "./pages/Department/AllDept.jsx";
import DepartmentDetail from "./pages/Department/DepartmentDetail.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";
import Candidates from "./pages/Candidates/Candidates.jsx";
import Holidays from "./pages/Holidays/Holidays.jsx";
import Setting from "./pages/Settings/Setting.jsx";
import Notification from "./pages/Notification/Notification.jsx";
import PerInfo from "./pages/AddEmployee/PerInfo.jsx";
import EmployeeDetWrapper from "./pages/Dashboard/EmployeeDetWrapper.jsx";
import employees from "./pages/Dashboard/Employee.jsx";
import Account from "./pages/Account/Account.jsx";
import ManagePlan from "./pages/Subscription/ManagePlan.jsx";
import BasicDetail from "./pages/SelfService/AllPArt/My Profile/BasicDetail.jsx";
import Service from "./pages/SelfService/Service.jsx";
import Inbox from "./pages/Inbox/Inbox.jsx";
import Orga from "./pages/Organization/Orga.jsx";
import MyTeam from "./pages/Team/MyTeam.jsx";

function App() {

  return (
    <HashRouter>
      <main
        className={`w-full  transition-colors duration-300 `}
      >
        

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/allDepartment" element={<AllDept />} />
          <Route path="/allDepartment/department/:name" element={<DepartmentDetail />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/Candidates" element={<Candidates />} />
          <Route path="/Holidays" element={<Holidays />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Team" element={<MyTeam/>} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/add-employee-personal" element={<PerInfo />} />
          <Route path="/employee/:id" element={<EmployeeDetWrapper employees={employees} />} />
          <Route path="/ManagePlan" element={<ManagePlan />} />
          <Route path="/ManagePlan" element={<ManagePlan />} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/Inbox" element={<Inbox/>} />
          <Route path="/Organization" element={<Orga/>} />
          {/* <Route path="/BasicDetail" element={<BasicDetail/>} /> */}

        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
