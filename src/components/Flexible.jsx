import React from 'react'

const Flexible = () => {
  return (
    <div className='w-full bg-[#FCFDFF] transition-all duration-600 ease-in-out flex flex-col items-center lg:justify-center sm:px-4 xl:px-[9%]'>
        <div className='sm:border-x sm:border-gray-200 px-4 '>
            <h1 className= "pt-5 text-[#061B31] text-[22px] md:text-[28px] lg:text-[32px] leading-none xl:w-[77%]">
                Flexible solutions for every business model 
                <span className= "text-[#64748D]"> Grow your business with a comprehensive set of payments and financial tools⁠—⁠designed to work individually or together.</span>
            </h1>
           <div>
            <div>
              <div>
                {/* first button */}
                <button></button>
                {/* Second button */}
                <button>
                 <div>
                   <h3></h3>
                 </div>

                </button>

                {/* third button */}
                <button></button>

                {/* fourth button */}
                <button>
                  <div>
                    <h3></h3>
                  </div>
                </button>
              </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Flexible