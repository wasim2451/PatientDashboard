import React, { useState } from 'react'
import patient from '../assets/patient.png'
import reg from '../assets/registration.png'
function Dashboard() {
    // Main Code Part
    //Set three variables for name , age and file.
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState("");
    // Set a varible for storing the Data which will be array of objects
    const [data, setData] = useState([]);
    const handleInput = (e) => {
        setName(e.target.value);
    }
    const handleage = (e) => {
        setAge(e.target.value);
    }
    const handlefile = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    const handleSubmit = (e) => {
        e.preventDefault();// To prevent page reload
        const newPatient = { name: name, age: age, file: file };
        setData([...data, newPatient]);
        //Clear all the input fields.
        setName("");
        setAge("");
        setFile(null);
        alert("Form submitted");
    }







    return (
        <div className='bg-white border-2 rounded-lg md:mx-[15%] mx-[20px] min-h-[100px] mt-[1%] pb-[2%]' id='formdata'>
            <div className='flex justify-start items-center gap-[10px] md:px-[4%] md:p-[30px] p-[15px] pb-0 md:pb-0'>
                <img className='w-[30px] md:w-[60px]' src={patient} alt="Image here" />
                <p className='md:text-[28px] font-bold sm:text-[20px]'>New Patient Registration</p>
            </div>
            <form id="patientForm" onSubmit={handleSubmit} class="space-y-6 px-[4%] pb-[4%] pt-[2%]">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
                        <div class="relative">
                            <i class="bi bi-person absolute left-3 top-3 text-gray-400"></i>
                            <input type="text" id="name" onChange={handleInput} value={name}
                                class="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required />
                        </div>
                    </div>
                    <div>
                        <label class="block text-lg font-medium text-gray-700 mb-2">Age</label>
                        <div class="relative">
                            <i class="bi bi-calendar3 absolute left-3 top-3 text-gray-400"></i>
                            <input type="number" id="age" min="0" max="120" onChange={handleage}
                                class="pl-10 block w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required />
                        </div>
                    </div>
                </div>
                <div className="fileDiv">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Medical Records</label>
                    {file ? (
                        <div className="flex items-center justify-between px-4 py-3 border-2 border-green-500 rounded-lg bg-green-50">
                            <p className="text-gray-700 text-sm md:text-base">
                                <strong>Uploaded File:</strong> {filename}
                            </p>
                            <button
                                className="text-red-500 hover:text-red-600 text-sm md:text-base font-medium"
                                onClick={() => {
                                    setFile(null);
                                    setFilename("");
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ) : (
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-all">
                            <div className="space-y-2 text-center">
                                <i className="bi bi-cloud-upload text-4xl text-gray-400"></i>
                                <div className="flex text-[16px] text-gray-600">
                                    <label
                                        htmlFor="records"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                                    >
                                        <span>Upload files</span>
                                        <input
                                            id="records"
                                            type="file"
                                            className="sr-only"
                                            onChange={handlefile}
                                            required
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PDF, DOC, JPEG up to 10MB each</p>
                            </div>
                        </div>
                    )}
                </div>

                <div class="flex justify-end font-medium md:text-[20px] text-sm">
                    <button type="submit"
                        class="bg-blue-600 text-white md:px-6 md:py-3 py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center">
                        <img src={reg} className='md:w-[40px] w-[27px] pr-2' alt="" />
                        Register Patient
                    </button>
                </div>
            </form>

            <div>
    <p className='font-bold text-[20px] md:text-[30px] px-[4%] pb-3'>Patient Details</p>
    <hr className='border-b-[2px] border-black'/>
    <p className='grid grid-cols-3 gap-4 text-center py-4 text-sm md:text-lg font-semibold tracking-wider'>
        <span> Name </span>
        <span> Age </span>
        <span> File </span>
    </p>
    <hr className='border-b-[2px] border-black'/>
    <ul className='px-[25px] md:px-[10%] font-medium text-sm md:text-lg md:mt-[20px] mt-[10px]'>
        {data.map((item, index) => (

            <li key={index} className='grid grid-cols-3 py-2'>
                <span className='text-center'>{item.name}</span>
                <span className='text-center'>{item.age}</span>
                <span className='text-center'>{item.file ? item.file.name : "No file uploaded"}</span>
            </li>
        ))}
    </ul>
</div>


        </div>
    )
}

export default Dashboard
