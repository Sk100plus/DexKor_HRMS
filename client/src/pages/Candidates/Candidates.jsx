import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image from '../profile.jfif';
import Navbar from '../Navbar/Navbar';
import Profile from '../Dashboard/Profile';

// Sample candidates (repeat or add more)
const candidates = [
  { name: 'Leslie Watson', role: 'UI/UX Designer', date: 'July 14, 2023', email: 'leasie.w@demo.com', phone: '(629) 555-0129', status: 'Selected' },
  { name: 'Floyd Miles', role: 'Sales Manager', date: 'July 14, 2023', email: 'floyd.m@demo.com', phone: '(217) 555-0113', status: 'In Process' },
  { name: 'Jenny Wilson', role: 'DevOps Engineer', date: 'July 13, 2023', email: 'jenny.w@demo.com', phone: '(921) 555-0193', status: 'Selected' },
  { name: 'Ronald Richards', role: 'Product Manager', date: 'July 13, 2023', email: 'ronald.r@demo.com', phone: '(411) 555-0187', status: 'Rejected' },
  { name: 'Savannah Nguyen', role: 'Marketing Lead', date: 'July 12, 2023', email: 'savannah.n@demo.com', phone: '(212) 555-0171', status: 'In Process' },
  { name: 'Darlene Robertson', role: 'Data Analyst', date: 'July 12, 2023', email: 'darlene.r@demo.com', phone: '(311) 555-0156', status: 'Rejected' },
  { name: 'Bessie Cooper', role: 'React Developer', date: 'July 11, 2023', email: 'bessie.c@demo.com', phone: '(119) 555-0122', status: 'Selected' },
  { name: 'Cody Fisher', role: 'Full Stack Dev', date: 'July 10, 2023', email: 'cody.f@demo.com', phone: '(123) 555-0145', status: 'Selected' },
  { name: 'Arlene McCoy', role: 'Backend Dev', date: 'July 9, 2023', email: 'arlene.m@demo.com', phone: '(321) 555-0134', status: 'In Process' },
  // Add more if needed...
];

const statusStyles = {
  Selected: 'bg-green-100 text-green-600',
  'In Process': 'bg-yellow-100 text-yellow-600',
  Rejected: 'bg-red-100 text-red-600',
};

const Candidates = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const candidatesPerPage = 7;

  const filteredCandidates = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);
  const paginatedCandidates = filteredCandidates.slice(
    (page - 1) * candidatesPerPage,
    page * candidatesPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
<div className=' font-sans select-none  '>
  <div>
    <Profile/>

  </div>
  <div className='flex'>
  <div>
  <Navbar/>
  </div>
<div className='w-full'>
<div className="  select-none px-5">
      {/* Header */}
      <div className=" flex justify-between items-center">
        <div className='my-2 '>
          <h2 className="text-2xl font-semibold text-gray-800">Candidates</h2>
          <p className="text-sm text-gray-500">Show All Candidates</p>
        </div>
        <Input
          className="pl-9 w-1/3 rounded-lg shadow-sm border border-gray-300 focus:ring-0 focus:outline-none"
          placeholder="Search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to first page on search
          }}
        />
      </div>

      {/* Card Table */}
      <Card className="p-0 rounded-xl shadow-md overflow-hidden border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-12 items-center px-4 py-3 bg-gray-50 text-sm font-medium text-gray-600 border-b">
        <Checkbox className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />

          <span className="col-span-2">Candidate Name</span>
          <span className="col-span-2">Applied For</span>
          <span className="col-span-2">Applied Date</span>
          <span className="col-span-2">Email Address</span>
          <span className="col-span-2">Mobile Number</span>
          <span className="col-span-1 text-center">Status</span>
        </div>

        {/* Table Rows */}
        {paginatedCandidates.map((c, i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-center gap-4 px-4 py-3 text-sm border-b border-gray-200"
            >
            <Checkbox />
            <div className="col-span-2 flex items-center gap-3">
              <img
                src={image}
                alt="profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-gray-800 font-medium">{c.name}</span>
            </div>
            <span className="col-span-2">{c.role}</span>
            <span className="col-span-2">{c.date}</span>
            <span className="col-span-2">{c.email}</span>
            <span className="col-span-2">{c.phone}</span>
            <span
              className={`col-span-1 text-xs text-center px-2 py-1 rounded font-medium ${statusStyles[c.status]}`}
            >
              {c.status}
            </span>
          </div>
        ))}

        {paginatedCandidates.length === 0 && (
          <div className="px-4 py-6 text-center text-gray-500 text-sm">
            No candidates found.
          </div>
        )}
      </Card>

      {/* Footer with Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span>Showing</span>
          <span>{paginatedCandidates.length}</span>
          <span>
            out of {filteredCandidates.length} matching record(s)
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft size={16} />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              variant={page === i + 1 ? 'outline' : 'ghost'}
              size="sm"
              onClick={() => handlePageChange(i + 1)}
              className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
</div>
  </div>
  
 

    
  
    </div>
  );
};

export default Candidates;
