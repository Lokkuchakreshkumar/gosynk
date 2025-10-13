import { memo } from 'react';
import Navleft from './Navleft';
import Navright from './Navright';
import { IoIosBriefcase } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { ImBullhorn } from "react-icons/im";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaSearchLocation } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
const Navbar = () => {
  return (
     <div className='flex z-20   justify-between fixed top-.0 items-center w-full h-15 bg-black/40 backdrop-blur-2xl '>
      <Navleft/>
      <div className='flex justify-center  gap-3 items-center'>
       <div className='text-white/50 flex justify-center items-center px-4 py-2 hover:border hover:border-white/40 hover:text-white hover:rounded-sm hover:cursor-pointer'><IoIosBriefcase className='inline mr-2'/>Jobs</div>
<div className='text-white/50 flex justify-center items-center px-4 py-2 hover:border hover:border-white/40 hover:text-white hover:rounded-sm hover:cursor-pointer'><FaCalendar className='inline mr-2'/>Events</div>
<div className='text-white/50 flex justify-center items-center px-4 py-2 hover:border hover:border-white/40 hover:text-white hover:rounded-sm hover:cursor-pointer'><ImBullhorn className='inline mr-2'/>Announcements</div>
<div className='text-white/50 flex justify-center items-center px-4 py-2 hover:border hover:border-white/40 hover:text-white hover:rounded-sm hover:cursor-pointer'><IoChatbubbleEllipsesSharp className='inline mr-2'/>Feed</div>
    <div className='text-white/50 flex justify-center items-center px-4 py-2 hover:border hover:border-white/40 hover:text-white hover:rounded-sm hover:cursor-pointer'><FaSearchLocation className='inline mr-2'/>Lost&Found</div>
    <div className='text-white/50 flex justify-center items-center px-4 py-2 hover:border hover:border-white/40 hover:text-white hover:rounded-sm hover:cursor-pointer'><MdDashboard className='inline mr-2'/>Dashboard</div>

      </div>
      <Navright/>
    
    </div>
  );
};

export default memo(Navbar);