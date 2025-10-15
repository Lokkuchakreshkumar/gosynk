import { memo } from 'react';
import Galaxy from './Galaxy';
import LightRays from './LightRays';
 import { PiPlugsConnectedBold } from "react-icons/pi";
const Hero = () => {
  return (
    <div className='relative flex flex-col items-center w-full justify-center'>
     




<div className='w-full sm:!hidden rounded-b-full' style={{ height: '600px', position: 'relative',top: 0}}>
  <Galaxy
  density={0.5}
  mouseRepulsion={false} />
</div>



<div className='sm:!flex !hidden' style={{ width: '100%', height: '600px', position: 'relative' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="cyan"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>

<div className='sm:!flex !hidden flex  top-[20%] sm:text-6xl  text-[1.2rem]  justify-center w-full  absolute  items-center'>
    <div className='strict font-bold  z-10'>GoSynk - Your Campus ,Connected</div>
   
        <PiPlugsConnectedBold className='inline m-1 text-6xl text-[#bfff00]'/>
   
</div>
<div className='sm:hidden flex-col top-[16%]  strict sm:text-6xl text-center text-[2rem]  pb-4 justify-center w-full  absolute  items-center'>
    <div className='strict font-bold  text-[2.3rem] z-10'>GoSynk </div>
   
     <div className='strict font-bold z-10'>Campus ,Connected <PiPlugsConnectedBold className='inline m-1 text-xl text-[#bfff00]'/></div>   
   
</div>
<div className='absolute sm:top-[38%] top-[34%] sm:text-lg  text-sm text-center p-2 text-white/50 '>
    A unified hub for jobs, events ,community updates and more. Built for students and admins with a sleek, futuristic experience.
</div>
<div id='buttons' className='flex  transition-all duration-500 absolute sm:top-[60%] top-[50%]  gap-8 justify-center items-center'>
  <div className='px-8 py-2 f hover:cursor-pointer bg-white hover:bg-white/95 text-lg rounded z-20 hover:rounded-lg transition-all duration-500 border text-black  border-black/30'>
   Get Started
   </div>
     <div className='px-8 py-2 font-bold hover:cursor-pointer bg-black/10 text-lg backdrop-blur-sm transition-colors z-20 duration-500 rounded-xl hover:border hover:border-black border text-white hover:bg-[#bfff00] hover:text-black  border-white/50'>
      Dashboard
   </div>
</div>
<div className='flex absolute sm:top-[85%] top-[72%] border border-black/80  p-2 rounded-full bg-black/10 backdrop-blur-xl z-25 justify-center items-center'>
    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
    <div className='px-2 text-green-500 font-sans'>Exclusive for KL Univeristy</div>
</div>
    </div>

  );
};

export default memo(Hero);