import { memo } from 'react';

const Aipart = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
     <div className='text-white/40 font-bold text-lg underline smooth pt-12'>
        Quick AI
     </div>
     <div className='flex sm:!flex-row flex-col justify-center py-4 items-center '>
  <div>
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 106 106"
  width="70"
  height="70"
  className='rounded-xl'
>
  {/* Inner rounded red circle */}
  <path
    fill="url(#commandAI16GradientG)"
    d="M34.372 59.987c25.33 0 25.329-25.329 25.329-25.329s0 25.33 25.329 25.33c-25.33 0-25.33 25.329-25.33 25.329s0-25.33-25.329-25.33"
  />
  
  {/* Inner red cross-ish shape */}
  <path
    fill="url(#commandAI16GradientH)"
    d="M34.374 20.693s0 13.41-13.41 13.41c13.41 0 13.41 13.409 13.41 13.409s0-13.41 13.41-13.41c-13.41 0-13.41-13.41-13.41-13.41"
  />

  <defs>
    <radialGradient
      id="commandAI16GradientG"
      cx="0"
      cy="0"
      r="1"
      gradientTransform="rotate(99.003 24.578 31.363) scale(74.2384)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.51" stopColor="red" />
      <stop offset="1" stopColor="#FF7575" />
    </radialGradient>

    <radialGradient
      id="commandAI16GradientH"
      cx="0"
      cy="0"
      r="1"
      gradientTransform="rotate(99.003 24.578 31.363) scale(74.2384)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.51" stopColor="red" />
      <stop offset="1" stopColor="#FF7575" />
    </radialGradient>
  </defs>
</svg>
  </div>
     <div className='sm:!text-4xl text-2xl font-extrabold text-center py-4'>
Ask anything, solve doubts instantly
</div>
     </div>

<div className='text-white/40  sm:w-[60%] w-full px-2 text-center text-lg  py-4'>
    GoSynk Help brings Al-powered assistance right into your campus platform. Ask questions, get clarifications, and find answers seamlessly while browsing events, jobs, and community posts all without leaving GoSynk.
</div>
    </div>
  );
};

export default memo(Aipart);