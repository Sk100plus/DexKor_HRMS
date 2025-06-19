import React from 'react'
import bimage from './bookimage.jpg'
const EmpFee = () => {
  return (
    <div>
    <h3 className="text-md font-semibold mb-2">Probation Feedback - Employee</h3>
    <div className="grid grid-cols-4 bg-gray-100 p-2 font-semibold">
      <div>Policy Name</div>
      <div>Status</div>
      <div>Completed Date</div>
      <div>Action</div>
    </div>
    <div className="flex justify-center items-center py-6 text-gray-500 text-sm col-span-4">
  <img src={bimage} alt="" width={100} height={100} />
</div>

  </div>
  )
}

export default EmpFee
