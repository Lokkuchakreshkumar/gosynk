import image from '../assets/gosync_logo.png'

const Footer = ()=>{
    return(
       <div className='bg-white/5 rounded-t-3xl backdrop-blur-3xl py-4 w-full relative backdrop  flex  flex-col  justify-center items-center'>
           <div  className='flex  sm:!flex-row flex-col sm:justify-evenly sm:justify-center  items-center gap-8 w-full'>
               <div className='flex  flex-col justify-start items-start  mr-auto px-4 gap-4 '>
                <div>
                    <a  target='_blank' href="https://kled.vercel.app" className='text-xl inter hover:text-white  text-white/40 font-bold hover:underline hover:decoration-[#bfff00]'>KLED&nbsp;(Formerly KLUDESK)</a>
                     <div className='text-sm text-white/20'>
                        KLED is go to platform for resources
                     </div>
                </div>
                 <div>
                    <a  target='_blank' href="https://myskilldex.vercel.app" className='text-xl inter hover:text-white  text-white/40 font-bold hover:underline hover:decoration-[#bfff00]'>SkillDex&nbsp;</a>
                     <div className='text-sm text-white/20'>
                        AI personalized module generator
                     </div>
                </div>

               </div>
               <div className='flex flex-col justify-start items-start mr-auto px-4  gap-4 '>
                <div>
                    <a  target='_blank' href="https://newerp.kluniversity.in/" className='text-xl inter hover:text-white  text-white/40 font-bold hover:underline hover:decoration-[#bfff00]'>KL ERP</a>
                     <div className='text-sm text-white/20'>
                       KL ERP for all - attendance,timetable and etc.
                     </div>
                </div>
                 <div>
                    <a  target='_blank' href="https://lms.kluniversity.in" className='text-xl inter hover:text-white  text-white/40 font-bold hover:underline hover:decoration-[#bfff00]'>Lms&nbsp;</a>
                     <div className='text-sm text-white/20'>
                        Lms - Upload your Assignments and check grades
                     </div>
                </div>

               </div>
                <div className='flex flex-col justify-center mr-auto px-4  gap-4 '>
                <div>
                    <a  target='_blank' href="https://chakresh.vercel.app" className='text-xl inter hover:text-white  text-white/40 font-bold hover:underline hover:decoration-[#bfff00]'>Meet the Developer</a>
                     <div className='text-sm text-white/20'>
                       For quick contact and feedback
                     </div>
                </div>
                 <div className='flex justify-center items-center gap-2 bg-[#15291D] p-2 rounded-xl text-sm smooth'>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                     <div className=''>
                        All systems functional
                     </div>
                </div>

               </div>
           </div>
           <div className='mt-24 text-white/70 strict font-bold'>
            &copy; GoSynk 2025  &#8226; Made with Love by Chakresh
           </div>
       </div>
    )
}

export default Footer