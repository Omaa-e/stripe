import React from 'react'
import img1 from '../assets/bookCover.png'
import img2 from '../assets/work.webp'

const Book = () => {
  return (
    <div className='w-full xl:px-[9%] px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4'>
            <div className='text-[16px] sm:text-[22px] md:text-[28px] xl:text-[32px]'>
                <h1 className='text-[#061B31] '>Book of the week</h1>
                <p className='text-[#64748D]'>Entrepreneurship starts with ideas.</p>
            </div>

                {/* book img and text */}
            <div className='flex flex-col lg:flex-row h-screen pt-15'>
                <div className='bg-[#43281F] justify-center  h-full min-w-[500px] w-full lg:w-[29%] rounded-lg flex items-center'>
                    <img src={img1} className='w-[250px] object-cover 
                ' alt="" />
                </div>
                {/* Book details */}
                <div className='bg-[#F8FAFD] pt-5 px-6 lg:pl-30 lg:pt-20 xl:pl-33 rounded-lg h-full w-full lg:w-[70%]'>
                    <div>
                
                    <h4 className='text-[20px] md:text-[22px] lg:text-[26px]'>Working: Researching,<br/> Interviewing, Writing</h4>
                    <span className='text-[20px] md:text-[22px] lg:text-[26px] text-[#64748D]'>Robert A.Caro</span>
                    </div>

                    <div className=' pb-20'>
                        <div>
                            <p className='text-[#50617A] w-[82%] lg:w-[79%]'>
                                 Caro spent 50 years of his life researching two men—Robert Moses and Lyndon B. Johnson—to understand how political power works. His book unpacks his research method, from turning every page of every archive, however dry, to interviewing the same people repeatedly until they shared a missing piece of the story. An autobiographical account of caring unreasonably about getting things right.
                             </p>
                        </div>
                    </div>
                        {/* other paragraph div */}
                        <div>
                            <p className='text-[12px] text-[#50617A]'> For more ideas on economic progress and technological <br/> advancement, see our in-house publications:</p>

                            <div className='flex gap-1'>
                                <div className='border border-[#BAC8DA] rounded'>
                                    <a href="" className='text-[#50617A] hover:text-[#533AFD] text-[14px] font-semibold'>Stripe Press</a>
                                </div>
                               
                                <div className='flex border border-[#BAC8DA] rounded  '>
                                    <img src={img2} className='' alt="" />
                                        <a href="py-2" className='text-[#50617A] hover:text-[#533AFD] text-[14px] font-semibold'>Works in Progress</a>
                                </div>
                            </div>
                            
                        </div>
                    
               
                </div>
               
            </div>
           
        </div>
    </div>
  )
}

export default Book