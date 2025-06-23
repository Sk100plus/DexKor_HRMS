import React from 'react'

const NewAnn = ({activeTab,setActiveTab}) => {
  return (
    <div>
      <button className='border px-3 py-1 cursor-pointer' onClick={()=>setActiveTab("Current")}>
        back
      </button>
    </div>
  )
}

export default NewAnn
