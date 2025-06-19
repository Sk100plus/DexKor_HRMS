import React, { useState } from 'react';
import MainAsset from './MainAsset';
import RepReq from './RepReq';
import ShipReq from './ShipReq';

const MyAsset = () => {
  const [activeTab, setActiveTab] = useState('My Asset');

  const tabs = [
    'My Asset',
    'Repair Req',
    'Shipment Req',
    
  ];

  return (
    <div className="p-4 select-none">
      <div className="flex space-x-6 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-[11px] cursor-pointer border-b-2 transition-colors duration-150 ${
              activeTab === tab
                ? 'border-blue-400 text-blue-700 font-semibold'
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'My Asset' && (
            <MainAsset />
        
      )}
      {
        activeTab=='Repair Req'&&
        <RepReq/>
      }
       {
        activeTab=='Shipment Req'&&
        <ShipReq/>
      }
    </div>
  );
};

export default MyAsset;
