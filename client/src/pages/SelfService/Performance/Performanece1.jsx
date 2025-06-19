import React, { useState } from 'react';
import KeyRes from './KeyRes.jsx';
import Competency from './Competency';
import Skill from './Skill';
import RevHistory from './RevHistory';

const tabs = ['Key Result Areas (KRA)', 'Competency', 'Skill', 'Review History'];


const Performance1 = () => {
  const [activeTab, setActiveTab] = useState('Key Result Areas (KRA)');


  return (
    <div className="p-2 select-none font-sans bg-white">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mr-6 pb-2 text-[10px] font-semibold cursor-pointer ${
              activeTab === tab
                ? 'text-indigo-700 border-b-2 border-indigo-700'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'Key Result Areas (KRA)' && (
        <KeyRes/>
      )}
 {activeTab === 'Competency' && (
        <Competency/>
      )}
      {activeTab === 'Skill' && (
        <Skill/>
      )}
       {activeTab === 'Review History' && (
        <RevHistory/>
      )}
      {/* Placeholder for other tabs */}
      
    </div>
  );
};

export default Performance1;
