import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-primary text-white py-4 px-8 shadow-sm">
      <div className="max-w-full mx-auto flex items-center justify-between gap-4">
        
        {/* Back Button (Mobile) */}
        <div className="md:hidden">
          <button className="p-2 rounded-full hover:bg-gray-800">
            <HiOutlineChevronLeft className="h-5 w-5" />
          </button>
        </div>

        {/* Search Input (centered on desktop) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search everything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-52 md:w-64 rounded-full bg-gray-800 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <FiSearch className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="relative p-1 rounded-full hover:bg-gray-800">
            <IoMdNotificationsOutline className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="overflow-hidden rounded-full border-2 border-gray-700 hover:border-gray-500">
            <img
              src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="h-8 w-8 object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
