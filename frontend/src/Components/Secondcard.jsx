import { memo } from 'react';
import second from '../assets/publish.webp'
import { FaFire } from "react-icons/fa";
const Firstcard = () => {
  return (
    <div className='flex sm:!flex-row-reverse flex-col  justify-between py-8 sm:gap-8 items-center w-[90%]'>
      <div className='sm:w-[60%] sm:scale-100 flex justify-center items-center scale-112 '>
        <img src={second} className='opacity-80 rounded-full hover:opacity-100 transition-all duration-500' alt="" />
      </div>
      <div className='sm:!w-[50%] sm:m-0 mt-24 w-full flex flex-col justify-center items-center '>
 <div className='flex  sm:justify-start mr-auto text-blue-500  inter text-lg w-full font-bold items-center'>
    <FaFire className='sm:mr-3 my-2 text-2xl '/> 
    <div>Publish - Make Your Voice Heard</div>
    </div>
    <div className='text-4xl font-extrabold inter flex mr-auto py-2'>
       Gosynk gives every student a voice
    </div>
    <div className='text-white/30 py-4 font-medium   text-lg flex justify-center items-center '>

From sharing insights and projects to asking questions or celebrating wins, publish your thoughts and let your campus see what you're building.    </div>
     <div className='text-white/30 py-2 font-medium  text-lg flex justify-center items-center '>

Stay connected through an interactive feed where posts, comments, and discussions spark new ideas every day. Whether it's a doubt, a project, or a discovery - your post fuels your campus community.   </div>
      </div>
    </div>
  );
};

export default memo(Firstcard);