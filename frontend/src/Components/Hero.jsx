import { memo } from 'react';
 import LightRays from './LightRays';
 import { PiPlugsConnectedBold } from "react-icons/pi";
const Hero = () => {
  return (
    <div className='relative flex flex-col items-center justify-center'>
     

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="white"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div >
<div className='flex justify-center top-[20%] text-6xl  absolute  items-center'>
    <div className='strict font-bold'>GoSynk - Your Campus ,Connected</div>
    <div>
        <PiPlugsConnectedBold className='inline m-4 text-[#bfff00]'/>
    </div>
</div>
<div className='absolute top-[38%] text-lg text-white/50 '>
    A unified hub for jobs, events ,community updates and more. Built for students and admins with a sleek, futuristic experience.
</div>
<div id='buttons' className='flex  transition-all duration-500 absolute top-[60%]  gap-8 justify-center items-center'>
  <div className='px-8 py-2 f hover:cursor-pointer bg-white hover:bg-white/95 text-xl rounded hover:rounded-lg transition-all duration-500 border text-black  border-black/30'>
   Get Started
   </div>
     <div className='px-8 py-2 font-bold hover:cursor-pointer bg-black/50 text-lg backdrop-blur-3xl transition-colors duration-500 rounded-xl hover:border hover:border-black border text-white hover:bg-[#bfff00] hover:text-black  border-white/50'>
      Dashboard
   </div>
</div>
<div className='flex absolute top-[85%] border border-black/80  p-2 rounded-full bg-black/30 backdrop-blur-3xl justify-center items-center'>
    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
    <div className='px-2 text-green-500 font-sans'>Exclusive for KL Univeristy</div>
</div>
    </div>

  );
};

export default memo(Hero);