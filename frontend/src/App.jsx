import { memo } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Slide from './Components/Slide';
import Firstcard from './Components/Firstcard';
import Secondcard from './Components/Secondcard';
const App = () => {
  return (
    <div className='bg-[#0A0A0D] flex flex-col items-center justify-center text-white min-h-screen'>
      <Navbar/>
      <Hero/>
      <Slide/>
      <Firstcard/>
      <Secondcard/>
    </div>
  );
};

export default memo(App);