import { HashRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <HashRouter>
      <main className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          <Route path="/allDepartment" element={<AllDept />} />
          <Route path="/allDepartment/department/:name" element={<DepartmentDetail />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Candidates" element={<Candidates />} />
          <Route path="/Holidays" element={<Holidays />} />
          <Route path="/Setting" element={<Setting />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/add-employee-personal" element={<PerInfo />} />
          <Route path="/employee/:id" element={<EmployeeDetWrapper employees={employees} />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
