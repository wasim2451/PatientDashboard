import React from 'react'
import people from '../assets/People.png'
import app from '../assets/appointment.png'
import records from '../assets/records.png'
function Cards() {
return (
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[2%]">
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div class="flex items-center">
        <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <img src={people} className='w-[30px] md:w-[55px]' alt="" />
        </div>
        <div class="ml-4">
            <p class=" text-sm md:text-[20px] font-semibold text-gray-500 md:mb-2">Total Patients</p>
            <h3 class="text-xl font-bold text-gray-800">1,482</h3>
        </div>
    </div>
</div>
<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div class="flex items-center">
        <div class="p-3 rounded-full bg-green-100 text-green-600">
        <img src={app} className='w-[30px] md:w-[55px]' alt="" />
        </div>
        <div class="ml-4">
            <p class=" text-sm md:text-[20px] font-semibold text-gray-500 md:mb-2">Appointments Today</p>
            <h3 class="text-xl font-bold text-gray-800">32</h3>
        </div>
    </div>
</div>
<div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div class="flex items-center">
        <div class="p-3 rounded-full bg-purple-100 text-purple-600">
        <img src={records} className='w-[30px] md:w-[55px]' alt="" />
        </div>
        <div class="ml-4">
            <p class=" text-sm md:text-[20px] font-semibold text-gray-500 md:mb-2">Medical Records</p>
            <h3 class="text-xl font-bold text-gray-800">3,642</h3>
        </div>
    </div>
</div>
</div>
</div>  

)
}

export default Cards
