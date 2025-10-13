import { memo } from 'react';
import second from '../assets/publish.webp'
import { FaFire } from "react-icons/fa";
const Secondcard = () => {
  return (
     <div className='flex flex-row-reverse py-12 justify-between items-center w-[80%]'>
         <div className='w-[60%] flex justify-center'>
           <img src={second} className='opacity-60 hover:opacity-100 w-[70%] rounded-full transition-all duration-500' alt="" />
         </div>
         <div className='w-[40%] flex flex-col justify-center items-center '>
    <div className='flex justify-start mr-auto text-blue-500 inter text-2xl font-bold items-center'>
       <FaFire className='mr-3 my-2 text-3xl'/> 
       <div>Publish - Make Your Voice Heard</div>
       </div>
       <div className='text-4xl font-extrabold inter flex mr-auto py-2'>
           
GoSynk gives every student a voice.
       </div>
       <div className='text-white/30 py-4 font-medium  text-lg flex justify-center items-center '>
   
From sharing insights and projects to asking questions or celebrating wins, publish your thoughts and let your campus see what you're building.

       </div>
        <div className='text-white/30 py-2 font-medium  text-lg flex justify-center items-center '>
   
Stay connected through an interactive feed where posts, comments, and discussions spark new ideas every day. Whether it's a doubt, a project, or a discovery - your post fuels your campus community.    </div>
         </div>
       </div>
  );
};

export default memo(Secondcard);