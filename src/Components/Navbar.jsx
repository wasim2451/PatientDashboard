import React from 'react'
import card from '../assets/report.png';
import profile from '../assets/user.png'
import bell from '../assets/bell.png'

function Navbar() {
    return (
      <nav className="bg-white p-3 md:px-[15%] border-b-[5px] border-blue-400">
      <div className="flex flex-wrap justify-between items-center md:min-h-[80px] min-h-[40px]">
        <div className="flex items-center gap-2 md:gap-[20px]">
          <img src={card} alt="" className="w-[35px] md:w-[60px]" />
          <p className="text-[18px] md:text-[35px] font-bold tracking-wide text-blue-700">
            HealthCare Dashboard
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-[15px] mt-2 md:mt-0">
          <img src={bell} className='w-[22px] md:w-[35px] cursor-pointer' alt="" />
          <img src={profile} className='w-[22px] md:w-[35px] cursor-pointer' alt="" />
        </div>
      </div>
    </nav>
    
    )
}

export default Navbar
