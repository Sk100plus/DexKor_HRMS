import React,{useState} from 'react'
const kraData = [
    {
      title: 'Employee Relations',
      description: 'Promote positive workplace relationships and resolve conflicts',
    },
    {
      title: 'Financial Reporting And Analysis',
      description: 'Generate accurate and timely financial reports for informed decision-making',
    },
  ];
  
const KeyRes = () => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = kraData.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div>
    <div className="space-y-3">
          {paginatedItems.map((item, index) => (
            <div key={index} className=" border border-gray-300 focus:ring-0 focus:outline-none rounded-md p-4 shadow-sm bg-white">
              <h3 className="text-[13px] font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600 ">
            <div>
              Items per page:{' '}
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="ml-2  border border-gray-300 focus:ring-0 focus:outline-none rounded px-2 py-1"
              >
                {[5, 10, 20, 50].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {startIndex + 1} - {Math.min(startIndex + itemsPerPage, kraData.length)} of {kraData.length}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="ml-4 text-gray-500 disabled:opacity-50"
              >
                &lt;
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    startIndex + itemsPerPage < kraData.length ? prev + 1 : prev
                  )
                }
                disabled={startIndex + itemsPerPage >= kraData.length}
                className="ml-2 text-gray-500 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default KeyRes
