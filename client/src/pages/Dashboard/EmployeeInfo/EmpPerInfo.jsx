import React, { useState,useRef } from "react";
import { Input } from "@/components/ui/input";
// import image from "../profile.jfif";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import EmpDoc from "./EmpDoc";
import EmpAcc from "./EmpAcc";
import EmpProfInfo from "./EmpProfInfo";
const EmpPerInfo = ({selectedEmployee}) => {

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

  
  return (
<div className=" select-none w-full">

    {/* Navigation bar*/}

<nav className="hidden md:flex justify-between bg-white ">
            <ul className="flex w-full text-sm font-medium text-gray-700 ">
              {tabs.map(({ id, label }, idx) => (
                <li
                  key={id}
                  className={`w-full text-center px-4 py-2 cursor-pointer ${
                    activeTab === id
                      ? "text-blue-600 border-b-2 border-blue-600 font-semibold bg-gray-50"
                      : "hover:bg-gray-100"
                  } `}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </nav>

          {/* Content Area */}

          {/* *************************personal********************************* */}


          <div className="mt-4">
            {activeTab === "personal" && (
           <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700">
         
             <div>
               <p className="text-gray-400 mb-1">First Name</p>
               <div className="border-b border-gray-200 py-1">{fname || 'Brooklyn'}</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Last Name</p>
               <div className="border-b border-gray-200 py-1">{lname || 'Simmons'}</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Mobile Number</p>
               <div className="border-b border-gray-200 py-1">{mobile || '(702) 555-0122'}</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Email Address</p>
               <div className="border-b border-gray-200 py-1">{email || 'brooklyn.s@example.com'}</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Date of Birth</p>
               <div className="border-b border-gray-200 py-1">July 14, 1995</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Marital Status</p>
               <div className="border-b border-gray-200 py-1">Married</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Gender</p>
               <div className="border-b border-gray-200 py-1">Female</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Nationality</p>
               <div className="border-b border-gray-200 py-1">America</div>
             </div>
         
             <div className="col-span-full">
               <p className="text-gray-400 mb-1">Address</p>
               <div className="border-b border-gray-200 py-1">2464 Royal Ln. Mesa, New Jersey</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">City</p>
               <div className="border-b border-gray-200 py-1">California</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">State</p>
               <div className="border-b border-gray-200 py-1">United State</div>
             </div>
         
             <div>
               <p className="text-gray-400 mb-1">Zip Code</p>
               <div className="border-b border-gray-200 py-1">35624</div>
             </div>
         
           </div>
         
         </CardContent>
         
          
            )}



            {/* ************************************Professional**************************************** */}



            {activeTab === "professional" && 
        <EmpProfInfo />
        
         }

         {/* Documents Part */}

         
            {activeTab === "document" && 
                

<EmpDoc  />
        
            }

            {/* ****************************Account******************************** */}



            {activeTab === "account" && 
          <EmpAcc />
            }

          </div>
    </div>
  );
};

export default EmpPerInfo;
