import { memo } from 'react';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='bg-[#0A0A0D] text-white min-h-screen'>
      <Navbar/>
    </div>
  );
};

export default memo(App);