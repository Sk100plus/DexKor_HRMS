import React, { useState } from 'react';

const OrgTree = ({activeTab,setActiveTab}) => {
  const [expandedNodes, setExpandedNodes] = useState({
    executive: true,
    team1: true,
    team2: true
  });

  const toggleNode = (node) => {
    setExpandedNodes(prev => ({
      ...prev,
      [node]: !prev[node]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex items-center justify-between ">
      <button
          onClick={() => setActiveTab("Current")}
          className="text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          &lt; Back
        </button>
      </div>

      {/* Executive Level */}
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="w-64 h-20 bg-white rounded-lg shadow-md flex flex-col items-center justify-center border-2 border-blue-500 relative">
            <h3 className="font-bold text-lg">Richard Samuel</h3>
            <p className="text-gray-600">Executive</p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => toggleNode('executive')}
                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center"
              >
                {expandedNodes.executive ? '-' : '+'}
              </button>
            </div>
          </div>
          
         
        </div>

        {/* Team Members (only shown when executive is expanded) */}
        {expandedNodes.executive && (
          <div className="flex space-x-12">
            {/* Team 1 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-56 h-16 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-300 relative">
                  <p className="font-medium">zh 2</p>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <button 
                      onClick={() => toggleNode('team1')}
                      className="w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm"
                    >
                      {expandedNodes.team1 ? '-' : '+'}
                    </button>
                  </div>
                </div>
                
                {expandedNodes.team1 && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-300"></div>
                    <div className="mt-8 space-y-6">
                      {['Jaime Lumsister', 'Jorah Meimant', 'Benjen Stark'].map((name, index) => (
                        <div key={index} className="w-48 h-14 bg-white rounded shadow-sm flex flex-col items-center justify-center border border-gray-200">
                          <p className="font-medium text-sm">{name}</p>
                          <p className="text-xs text-gray-500">Software Engineer</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="w-56 h-16 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center border border-gray-300 relative">
                  <p className="font-medium">zh 2</p>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <button 
                      onClick={() => toggleNode('team2')}
                      className="w-5 h-5 bg-blue-400 text-white rounded-full flex items-center justify-center text-sm"
                    >
                      {expandedNodes.team2 ? '-' : '+'}
                    </button>
                  </div>
                </div>
                
                {expandedNodes.team2 && (
                  <>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-300"></div>
                    <div className="mt-8 space-y-6">
                      {['Lyanna Stark', 'Davos-Sesworth', 'Elena Martell'].map((name, index) => (
                        <div key={index} className="w-48 h-14 bg-white rounded shadow-sm flex flex-col items-center justify-center border border-gray-200">
                          <p className="font-medium text-sm">{name}</p>
                          <p className="text-xs text-gray-500">Software Engineer</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrgTree;