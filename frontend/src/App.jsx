import { memo } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Slide from './Components/Slide';
import Firstcard from './Components/Firstcard';
import Secondcard from './Components/Secondcard';
import Aipart from './Components/Aipart';
import SpotlightCard from './Components/SpotlightCard';
import { FaLock } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import GemChat from 'gchat'
import systemPrompt from './prompt.js';
import Footer from './Components/Footer';
Footer
Aipart
const App = () => {

  return (
    <div className='bg-[#0A0A0D] flex w-full  flex-col items-center justify-center text-white min-h-screen'>
      <div className='z-50  '>
<GemChat apiKey={import.meta.env.VITE_AI_ENV} systemPrompt={systemPrompt}/>
      </div>
      <Navbar/>
      <Hero/>
      <Slide/>
      <Firstcard/>
      <Secondcard/>
      <Aipart/>
      
      
  
<div className='flex flex-col justify-center items-center py-24'>
<div className='flex sm:!flex-row flex-col justify-center   gap-4 items-center'>
<SpotlightCard className="custom-spotlight-card sm:w-[50%] w-[90%]" spotlightColor="rgba(255, 255, 255, 0.25)">
  <div className='flex flex-col justify-center items-center'>
<FaLock className='block text-3xl text-white mr-auto'/>
<div className='text-2xl font-bold inter mr-auto py-4'>
  Secure Assured
</div>
<div className='text-white/80 py-1 pb-3 mr-auto w-[90%]'>
  We promise security with every click, every login, every interaction.
</div>
  </div>
</SpotlightCard>
<SpotlightCard className="custom-spotlight-card sm:w-[50%] w-[90%]" spotlightColor="rgba(255, 255, 255, 0.25)">
  <div className='flex flex-col justify-center items-center'>
<FaLightbulb className='block text-3xl text-white mr-auto'/>
<div className='text-2xl font-bold inter mr-auto py-4'>
 Rapid Innovation</div>
<div className='text-white/80 py-1 pb-3 mr-auto w-[90%]'>
 Redefining innovation by connecting ideas, people, and opportunities seamlessly.
</div>
  </div>
</SpotlightCard>
</div>
<div className='flex justify-center  py-4 gap-4 items-center'>


<SpotlightCard className="custom-spotlight-card w-[90%]" spotlightColor="rgba(255, 255, 255, 0.25)">
  <div className='flex flex-col justify-center items-center'>
<IoSparkles className='block text-3xl text-white mr-auto'/>
<div className='text-2xl font-bold inter mr-auto py-4'>
  Abundant Features</div>
<div className='text-white/80 py-1 pb-3 mr-auto w-[90%]'>
 Redefining innovation by connecting ideas, people, and opportunities seamlessly.
</div>
  </div>
</SpotlightCard>

</div>
</div>
<Footer/>
    </div>
  );
};

export default memo(App);