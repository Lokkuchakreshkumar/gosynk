import { memo } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Slide from './Components/Slide';
const App = () => {
  return (
    <div className='bg-[#0A0A0D] text-white min-h-screen'>
      <Navbar/>
      <Hero/>
      <Slide/>
    </div>
  );
};

export default memo(App);