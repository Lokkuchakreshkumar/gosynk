import { memo } from 'react';

const Navright = () => {
  return (
    <div className='flex gap-4 p-4 justify-center items-center'> 
   <div className='px-4 py-2 font-bold hover:cursor-pointer bg-cyan-400 text-sm rounded-xl border text-black  border-black/30'>
   Get Started
   </div>
     <div className='px-4 py-2 font-bold hover:cursor-pointer text-sm rounded-sm hover:border hover:border-black border text-white hover:bg-[#bfff00] hover:text-black  border-white/50'>
       Sign in
   </div>
    </div>
  );
};

export default memo(Navright);