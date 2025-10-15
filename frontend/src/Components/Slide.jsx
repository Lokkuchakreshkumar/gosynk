import { memo, useState } from 'react';
import comm1 from '../assets/comm1.png'
import comm2 from '../assets/comm2.png'
import comm3 from '../assets/comm3.png'
import car1 from '../assets/car1.png'
import car2 from '../assets/car2.png'
import eve1 from '../assets/eve1.png'
import eve2 from '../assets/eve2.png'

const Slide = () => {
    let [select, setSelected] = useState('comm')
    let handleClick = (e) => {
        setSelected(e.target.id);
    }
    return (
        <div className='flex flex-col justify-center py-16 items-center'>

            <div className='flex sm:!flex-row sm:w-[100rem] justify-between items-center  flex-col items-center'>
                <div className='flex flex-col  justify-center items-start'>
                    <div className='font-bold inter text-2xl'>GoSynk your campus life.</div>
                    <div className='text-white/30 inter text-lg'>Stay updated, connected, and ahead</div>
                </div>
                <div className='flex mt-8  font-bold leading-relaxed inter shadow-[1px_-2px_2px_1px_#202123] border-white/10 rounded-full   px-4 py-2 bg-[#0E0F11] justify-center items-center'>
                    <div onClick={handleClick} id='comm' className={`px-4 hover:cursor-pointer text-white/50 hover:text-white py-2 ${'comm' == select ? 'border  border-white/10 rounded-full text-white shadow-[inset_2px_2px_16px_#666666] ' : ''}`}>Community</div>
                    <div onClick={handleClick} id='car' className={`px-4 hover:cursor-pointer text-white/50 hover:text-white  py-2 ${'car' == select ? 'border border-white/10 rounded-full text-white shadow-[inset_2px_2px_16px_#666666] ' : ''}`}>Career</div>
                    <div onClick={handleClick} id='eve' className={`px-4 hover:cursor-pointer text-white/50 hover:text-white  py-2 ${'eve' == select ? 'border border-white/10 text-white rounded-full shadow-[inset_2px_2px_16px_#666666] ' : ''}`}>Events</div>
                </div>
            </div>
            <div className='flex justify-center sm:overflow-x-hidden overflow-x-auto items-center  sm:w-full'>
                {
                    select == "comm" && <div className='flex  sm:p-8  gap-8  py-16 sm:justify-center items-center'>
                        <img src={comm1} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />
                        <img src={comm2} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />
                        <img src={comm3} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />

                    </div>
                }
                  {
                    select == "car" && <div className='flex  sm:p-8  gap-8  py-16 sm:justify-center items-center'>
                        <img src={car1} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />
                        <img src={car2} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />

                    </div>
                }
                    {
                    select == "eve" && <div className='flex  sm:p-8  gap-8  py-16 sm:justify-center items-center'>
                        <img src={eve1} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />
                        <img src={eve2} className='sm:w-[23%] w-[60%] mx-2 rounded-3xl border border-indigo-500/15' alt="" />

                    </div>
                }
            </div>

        </div>
    );
};

export default memo(Slide);