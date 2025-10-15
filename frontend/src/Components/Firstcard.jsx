import { memo } from 'react';
import first from '../assets/tran.webp'
import { RiUserCommunityFill } from "react-icons/ri";
const Firstcard = () => {
  return (
    <div className='flex sm:!flex-row flex-col  justify-between py-8 items-center w-[90%]'>
      <div className='sm:w-[60%] flex justify-center items-center sm:scale-100 scale-112 '>
        <img src={first} className='opacity-80 hover:opacity-100 transition-all duration-500' alt="" />
      </div>
      <div className='sm:!w-[50%] sm:m-0 mt-24 w-full flex flex-col justify-center items-center '>
 <div className='flex  sm:justify-start mr-auto text-blue-500  inter text-lg w-full font-bold items-center'>
    <RiUserCommunityFill className='sm:mr-3 my-2 text-2xl '/> 
    <div>The Campus Hub</div>
    </div>
    <div className='text-4xl font-extrabold inter flex mr-auto py-2'>
        Ignite Your Campus Community
    </div>
    <div className='text-white/30 py-4 font-medium   text-lg flex justify-center items-center '>

GoSynk is more than a platform; it's the central powerhouse where your campus comes alive. We transform fragmented communication into a thriving ecosystem for collaboration, support, and shared growth.
    </div>
     <div className='text-white/30 py-2 font-medium  text-lg flex justify-center items-center '>

Fuel this energy with seamlessly integrated tools. Empower students to discover career-defining jobs, team up for events, find lost items, and voice their concerns all within a single, community-driven environment.    </div>
      </div>
    </div>
  );
};

export default memo(Firstcard);