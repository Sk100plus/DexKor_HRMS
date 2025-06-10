import  {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EmpPerInfo from './EmployeeInfo/EmpPerInfo.jsx';
import { Pencil } from 'lucide-react';
import Attendance from './EmpAsideBar/Attendance.jsx';
import Project from './EmpAsideBar/Project.jsx';
import Leave from './EmpAsideBar/Leave.jsx';
// import Attendance from './Attendance.jsx';
// import Projects from './EmployeeDetail/Projects.jsx';
// import Leave from './EmployeeDetail/Leave.jsx';

const EmployeeDet = ({ selectedEmployee }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Profile');

 

  if (!selectedEmployee) {
    return <div className="p-4 text-red-600">Employee not found.</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Attendance':
        return <Attendance/>;
      case 'Projects':
        return <Project/>;
      case 'Leave':
        return <Leave />;
        case 'Profile':
          return <div className="flex-1 p-4">
          <EmpPerInfo selectedEmployee={selectedEmployee} />
        </div>
      // default:
      //   return <div className="p-4 text-gray-700">Welcome to the Profile Dashboard</div>;
    }
  };


  return (
    <div className="min-h-screen  p-4 overflow-hidden ml-80">
      
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 ">

        {/* Top Info Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left: Image + Info */}
          <div className="flex items-center gap-4">
            <img
              src={selectedEmployee.image}
              alt={selectedEmployee.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h2 className="text-lg font-semibold">{selectedEmployee.name}</h2>
              <p className="text-sm text-gray-600">{selectedEmployee.role}</p>
              <p className="text-sm text-gray-500">{selectedEmployee.email}</p>
            </div>
          </div>

          {/* Right: Edit Profile Button */}
          <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            <Pencil size={16} />
            Edit Profile
          </button>
        </div>

        {/* Back Button */}
        <div className="flex justify-end mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => navigate('/DexKor_HRMS')}
          >
            Back
          </button>
        </div>

        <hr className="opacity-10 my-6" />

        <div className="flex   mr-1 w-full p-0">
  {/* Left Sidebar */}
  <aside className="w-1/5 border-r border-gray-200 bg-white p-4">
        <ul className="space-y-2 text-sm font-medium text-gray-700">
          {['Profile', 'Attendance', 'Projects', 'Leave'].map((item) => (
            <li
              key={item}
              className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                activeTab === item
                  ? 'text-blue-600 font-semibold bg-blue-100'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(item)}
            >
              <i className={`fas ${
                item === 'Profile' ? 'fa-user' :
                item === 'Attendance' ? 'fa-calendar-check' :
                item === 'Projects' ? 'fa-briefcase' :
                'fa-plane-departure'
              }`}></i>
              {item}
            </li>
          ))}
        </ul>
      </aside>


  {/* Main Content */}
  <main className="w-4/5 p-6 ">
        {renderContent()}
      </main>

      
  {/* Personal Info */}
  
</div>

      </div>
    </div>
  );
};

export default EmployeeDet;
