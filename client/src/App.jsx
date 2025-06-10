import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import PerInfo from "./pages/AddEmployee/PerInfo.jsx";
import employees from "./pages/Dashboard/Employee.jsx"; // Assuming this is an array
import EmployeeDetWrapper from "./pages/Dashboard/EmployeeDetWrapper.jsx";
import AllDept from "./pages/Department/AllDept.jsx";
import DepartmentDetail from "./pages/Department/DepartmentDetail.jsx";
import Attendance from "./pages/Attendance/Attendance.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";
import Candidates from "./pages/Candidates/Candidates.jsx";
import Holidays from "./pages/Holidays/Holidays.jsx";
import Navbar from "./pages/Navbar/Navbar.jsx";
import { Settings } from "lucide-react";
import Setting from "./pages/Settings/Setting.jsx";
import Notification from "./pages/Notification/Notification.jsx";

function App() {
  return (
    <HashRouter>
            {/* <Navbar /> */}
      <main className="w-full min-h-screen">
      
        <Routes>
        <Route path="/DexKor_HRMS" element={<Dashboard />} />
        {/* <Route path="/DexKor_HRMS/Navbar" element={<Navbar />} /> */}

          {/* Department Routes */}
          <Route path="/DexKor_HRMS/allDepartment" element={<AllDept />} />
          <Route
  path="/DexKor_HRMS/allDepartment/department/:name"
  element={<DepartmentDetail />}
/>
<Route path="/DexKor_HRMS/Attendance" element={<Attendance/>} />
<Route path="/DexKor_HRMS/Jobs" element={<Jobs/>} />
<Route path="/DexKor_HRMS/Candidates" element={<Candidates/>} />
<Route path="/DexKor_HRMS/Holidays" element={<Holidays/>} />
<Route path="/DexKor_HRMS/Setting" element={<Setting/>} />
<Route path="/DexKor_HRMS/Notification" element={<Notification/>} />


          {/* Employee Add + Detail View */}
          <Route path="/add-employee-personal" element={<PerInfo />} />
          <Route
            path="/employee/:id"
            element={<EmployeeDetWrapper employees={employees} />}
          />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
