import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PerInfo from "./pages/AddEmployee/PerInfo";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <BrowserRouter>
      <main className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-employee-personal" element={<PerInfo />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
