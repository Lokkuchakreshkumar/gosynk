import { memo } from 'react';
import gosync from '../assets/gosync_logo.png'
const Navleft = () => {
  return (
    <div className='flex justify-center items-center m-2'>
     <div> 
         <img src={gosync} className='object-cover border border-white/30 w-12 h-10  rounded-lg' alt="" />
     </div>
     <div className='strict font-bold text-xl p-2'>
        GoSynk
     </div>
    </div>
  );
};

export default memo(Navleft);