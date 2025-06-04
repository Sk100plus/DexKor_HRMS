import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import PerInfo from "./pages/AddEmployee/PerInfo.jsx";
// import { Button } from "@/components/ui/button";
import employees from "./pages/Dashboard/Employee.jsx";
// import EmployeeDet from "./pages/Dashboard/EmployeeDetail/EmployeeDet.jsx";
import EmployeeDetWrapper from "./pages/Dashboard/EmployeeDetWrapper.jsx";
import EmployeeList from "./pages/Dashboard/EmployeeList.jsx";
import EmployeeDet from "./pages/Dashboard/EmployeeDet.jsx";

function App() {
  return (
    <BrowserRouter>
    
      <main className="w-full min-h-screen">
        <Routes>
          <Route path="/DexKor_HRMS" element={<Dashboard />} />
          <Route path="/add-employee-personal" element={<PerInfo />} />
          {/* <Route
          path="/DexKor_HRMS"
          element={<EmployeeList employees={employees} />}
        /> */}
          <Route
          path="/employee/:id"
          element={<EmployeeDetWrapper employees={employees} />}
        />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
