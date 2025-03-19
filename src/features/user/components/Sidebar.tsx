import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { GrFavorite } from 'react-icons/gr';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuTvMinimalPlay } from 'react-icons/lu';


const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col items-center bg-primary text-gray-400 py-52 px-2 border-r border-gray-800 min-h-screen">
      <div className="w-10 h-10 bg-[#353942] rounded-full flex items-center justify-center mb-8">
        <span className="text-white font-bold">M</span>
      </div>
     
      <nav className="flex flex-col space-y-6 items-center">
        <button className="p-2 rounded-lg hover:bg-[#353942] hover:text-white transition-colors">
          <FiSearch className="h-6 w-6" />
        </button>
        <button className="p-2 rounded-lg bg-[#353942] text-white">
          <AiOutlineHome className="h-6 w-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-[#353942] hover:text-white transition-colors">
          <BiCategory className="h-6 w-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-[#353942] hover:text-white transition-colors">
          <GrFavorite className="h-6 w-6" />
        </button>
        <button className="p-2 rounded-lg hover:bg-[#353942] hover:text-white transition-colors">
          <LuTvMinimalPlay className="h-6 w-6" />
        </button>
      </nav>
      
      <div className="mt-auto">
        <button className="p-2 rounded-lg hover:bg-[#353942] hover:text-white transition-colors">
          <IoSettingsOutline className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;