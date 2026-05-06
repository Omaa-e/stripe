import React from 'react'
import img1 from '../assets/bookCover.png'
import img2 from '../assets/work.webp'

const Book = () => {
  return (
    <div className='w-full xl:px-[9%] sm:px-4'>
        <div className='sm:border-x sm:border-gray-200 px-4 pb-20'>
            <div className='text-[16px] sm:text-[22px] md:text-[28px] xl:text-[32px] leading-8 pt-16'>
                <h1 className='text-[#061B31] '>Book of the week</h1>
                <p className='text-[#64748D]'>Entrepreneurship starts with ideas.</p>
            </div>

                {/* book img and text */}
            <div className='flex flex-col lg:flex-row pt-15'>
                <div className='bg-[#43281F] justify-center  max-h-[900px] min-w-full lg:min-w-[450px] md:w-[10%] w-full lg:w-[29%] rounded-lg flex py-8 items-center'>
                    <img src={img1} className='w-[250px] object-cover rounded-lg
                ' alt="" />
                </div>
                {/* Book details */}
                <div className='bg-[#F8FAFD] pt-5 px-6 lg:pl-30 lg:pt-20 xl:pl-33 rounded-lg h-full w-full lg:w-[70%] pb-12'>
                    <div className='pb-5'>
                
                    <h4 className='text-[20px] md:text-[22px] lg:text-[26px]'>Working: Researching,<br/> Interviewing, Writing</h4>
                    <span className='text-[20px] md:text-[22px] lg:text-[26px] text-[#64748D]'>Robert A.Caro</span>
                    </div>

                    <div className=' pb-10'>
                        <div>
                            <p className='text-[#50617A] sm:w-[82%] lg:w-[79%] text-semibold'>
                                 Caro spent 50 years of his life researching two men—Robert Moses and Lyndon B. Johnson—to understand how political power works. His book unpacks his research method, from turning every page of every archive, however dry, to interviewing the same people repeatedly until they shared a missing piece of the story. An autobiographical account of caring unreasonably about getting things right.
                             </p>
                        </div>
                    </div>
                        {/* other paragraph div */}
                        <div>
                            <p className='text-[12px] text-[#50617A]'> For more ideas on economic progress and technological <br/> advancement, see our in-house publications:</p>

                            <div className='flex gap-1 pt-4'>
                                <div className='border border-[#BAC8DA] rounded'>
                                    <a href="" className='text-[#50617A] hover:text-[#533AFD] text-[14px] font-semibold'>Stripe Press</a>
                                </div>
                               
                                <div className='flex border border-[#d6d9fc] hover:border-[#BAC8DA] rounded py-1  '>
                                    <img src={img2} className='' alt="" />
                                        <a href="" className='text-[#50617A] hover:text-[#533AFD] text-[14px] font-semibold'>Works in Progress</a>
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