import React, { useState,useRef } from "react";
import { Input } from "@/components/ui/input";
import image from "../profile.jfif";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Account from "./Account";
import Document from "./Document";
import ProfInfo from "./ProfInfo";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const PerInfo = () => {

  const navigate=useNavigate();
  const [activeTab, setActiveTab] = useState("personal");
  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "professional", label: "Professional Information" },
    { id: "document", label: "Document" },
    { id: "account", label: "Account" },
  ];
 
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");
  const [zip,setZip]=useState("");

  const [drag1,setDrag1]=useState(null);
  const [drag2,setDrag2]=useState(null);
  const [drag3,setDrag3]=useState(null);
  const [drag4,setDrag4]=useState(null);
  

  const formRef = useRef();
  


  const handleNext = (e) => {
  if(fname!=""&&lname!=""&&email!=""&&mobile!=""&&address!=""&&address!=""&&zip!=""){
    setActiveTab("professional");
  }
const handleCancel=()=>{
  // setActiveTab("")
navigate("/DexKor_HRMS/");
}
  };
  const [documents, setDocuments] = useState({
    appointmentLetter: null,
    salarySlips: null,
    relievingLetter: null,
    experienceLetter: null,
  });
  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setDocuments((prev) => ({
        ...prev,
        [type]: file,
      }));
    }
  };

  
  const handleNext3 = () => {
    const allFilled = Object.values(documents).every(Boolean);
    if (!allFilled) {
      alert("Please upload all required documents.");
      return;
    }
  
    // Proceed to next tab
    setActiveTab("account");
  };

  const handleNext2=()=>{
    setActiveTab("document");
  }

const handleCancel2=()=>{
  setActiveTab("personal");

}
const handleCancelAccount=()=>{
  setActiveTab("document");
}
  const handleCancel = () => {
   setActiveTab("professional")
  };

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const startCamera = async () => {
    setIsCameraOn(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const takePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 300, 300);
    const imageUrl = canvasRef.current.toDataURL('image/png');
    setPhoto(imageUrl);
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop()); // stop webcam
    setIsCameraOn(false);
  };
  return (
    <div className="mt-4 select-none px-4 sm:px-6 md:px-8 lg:px-20 my-div">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-lg font-semibold mb-4 md:mb-0">Add New Employees</h3>
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative w-full max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <Input
              placeholder="Search"
              className="pl-9 w-full rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
            />
          </div>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center space-x-2 focus:outline-none cursor-pointer"
            >
              <img
                src={image}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-gray-700">John Doe</span>
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-10">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card Container */}
      <div className="max-w-7xl mx-auto w-full">
        <Card className="border border-gray-200 shadow-md rounded-2xl px-6 py-8">



          {/* Tabs for medium and larger screens */}


          <nav className="hidden md:flex justify-between bg-white rounded-lg border border-gray-200">
            <ul className="flex w-full text-sm font-medium text-gray-700 divide-x divide-gray-200">
              {tabs.map(({ id, label }, idx) => (
                <li
                  key={id}
                  className={`w-full text-center px-4 py-2 cursor-pointer ${
                    activeTab === id
                      ? "text-blue-600 border-b-2 border-blue-600 font-semibold bg-gray-50"
                      : "hover:bg-gray-100"
                  } ${idx === 0 ? "rounded-l-lg" : ""} ${
                    idx === tabs.length - 1 ? "rounded-r-lg" : ""
                  }`}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </nav>

          {/* Dropdown for small screens */}
          <div className="md:hidden bg-white rounded-lg border border-gray-200 mt-2 cursor-pointer">
            <select
              className="w-full px-4 py-2 text-sm text-gray-700 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              {tabs.map(({ id, label }) => (
                <option key={id} value={id} className="cursor-pointer">
                  {label}
                </option>
              ))}
            </select>
          </div>

          <hr className="border border-gray-100 mt-4" />



          {/* Content Area */}

          {/* *************************personal********************************* */}


          <div className="mt-4">
            {activeTab === "personal" && (
              <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"   >
               
                <div className="col-span-full flex mb-4 flex-col items-start gap-4">
  {/* Initial camera icon to start */}
  {!photo && !isCameraOn && (
    <div
      onClick={startCamera}
      className="w-24 h-24 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer"
    >
      <span role="img" aria-label="upload" className="text-2xl">📷</span>
    </div>
  )}

  {/* Video and capture button */}
  {isCameraOn && (
    <div className="flex flex-col items-center">
      <video ref={videoRef} width="300" height="300" className="rounded-lg shadow" />
      <button
        onClick={takePhoto}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        Capture Photo
      </button>
    </div>
  )}

  {/* Captured photo with retake option */}
  {photo && (
    <img
      src={photo}
      alt="Captured"
      className="w-24 h-24 rounded-full object-cover cursor-pointer"
      title="Click to retake photo"
      onClick={() => {
        setPhoto(null);
        startCamera();
      }}
    />
  )}

  {/* Hidden canvas for capturing the image */}
  <canvas ref={canvasRef} width="300" height="300" className="hidden" />
</div>



                  <Input
                
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                    placeholder="First Name"
                    className="rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                  required/>
                  <Input
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                    placeholder="Last Name"
                    className="rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                    required/>
                  <Input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile Number"
                    className="rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                    required/>
                  <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   type="email" placeholder="Email Address"
                    className="rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                    required/>
                  <Input
                    type="date"
                    className="cursor-pointer pr-10 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                    required/>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm focus:ring-0 focus:outline-none">
                    <option value="" disabled hidden className="text-gray-400">
                      Marital Status
                    </option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm focus:ring-0 focus:outline-none">
                    <option value="" disabled hidden className="text-gray-400">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm focus:ring-0 focus:outline-none">
                    <option value="" disabled hidden className="text-gray-400">
                      Nationality
                    </option>
                    <option value="indian">Indian</option>
                    <option value="american">American</option>
                  </select>
                  <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="col-span-full rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                    required/>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm focus:ring-0 focus:outline-none">
                    <option value="" disabled hidden className="text-gray-400">
                      City
                    </option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                  </select>
                  <select
                    className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer shadow-sm focus:ring-0 focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden className="text-gray-400">
                      State
                    </option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    {/* ... other states ... */}
                    <option value="puducherry">Puducherry</option>
                  </select>
                  <Input
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                    placeholder="ZIP Code"
                    className="rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
                    required/>
                  <div className="col-span-full flex justify-end space-x-4 mt-4">
                    <Link to="/DexKor_HRMS/">
                    <Button variant="outline" className="cursor-pointer bg-white text-black hover:bg-gray-200">
                      Cancel
                    </Button>
                    </Link>
                   
                    <Button className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700" onClick={handleNext}>Next</Button>
                  </div>
                </form>
              </CardContent>
            )}



            {/* ************************************Professional**************************************** */}



            {activeTab === "professional" && 
        <ProfInfo handleNext2={handleNext2} handleCancel2={handleCancel2}/>
        
         }

         {/* Documents Part */}

         
            {activeTab === "document" && 
                

<Document documents={documents} handleFileChange={handleFileChange} handleCancel={handleCancel} handleNext3={handleNext3}/>
        
            }

            {/* ****************************Account******************************** */}



            {activeTab === "account" && 
          <Account handleCancelAccount={handleCancelAccount}/>
            }

          </div>
        </Card>
      </div>
    </div>
  );
};

export default PerInfo;
