import React from 'react'
import { useState } from 'react';
import { BsPersonFillLock, BsKeyFill, BsEnvelopeArrowUpFill, BsGeoAltFill, BsBank, BsPhone } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const CreateUser = () => {

  const [name, setUsername] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [email, setEmail] = useState('');


  return (
    <>
      <div className='flex w-full h-scree text-center'>
        <div className='w-10/12 h-full lg:flex m-auto'>
          <div className=' w-2/3 m-auto flex justify-center items-center'>
            <form className='flex-col w-full'>

              <p className='text-2xl font-bold mt-2 text-[#269CFF]'>Add New Employee</p> <hr className=' my-4 border-[#269CFF]' />

              <InputField name={"Enter Name"} placeholder={"Enter Name"} value={name} onChange type="text" icon={<BsPersonFillLock />} />
              <InputField name={"Email"} placeholder={"Email"} value={email} onChange type="text" icon={<BsEnvelopeArrowUpFill />} />
              <InputField name={"Enter phone No"} placeholder={"Enter phone No"} value={phoneNo} onChange type="text" icon={<BsKeyFill />} />

              <select id="" className='btn my-4 w-full outline-none text-white py-2 px-4 rounded'>
                <option value="">Select Designation</option>
                <option value="teacher">HR</option>
                <option value="headquarter">Manager</option>
                <option value="headquarter">Sales</option>

              </select>

              <div className='flex gap-2 my-4'>
                Select Gender :
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label>
              </div>

              <div className='flex justify-start'>Upload Your Image :<input type="file" placeholder='Upload Your Image' /></div>

              <div className='flex justify-start gap-4 my-4'>
                Course : 
              <input type="checkbox" id="course" name="course" value="MCA"/>
              <label for="course">MCA </label><br/>
              <input type="checkbox" id="course" name="course" value="BCA"/>
              <label for="course">BCA </label><br/>
              <input type="checkbox" id="course" name="course" value="BSC"/>
              <label for="course">BSC</label><br/>
              
             </div>


              <button type='submit' className='btn my-4 font-semibold w-full outline-none text-white py-2 px-4 rounded-full'
              >Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}

export default CreateUser

const InputField = ({ name, placeholder, value, onChange, type = "text", icon }) => {
  return (
    <div className='text-start py-1'>

      <p className='py-1'>{name}</p>
      <div className="px-3 py-2 bg-white rounded w-full flex items-center gap-3 border-[0.1px] border-[#0000f]">
        {icon && <span className="text-lg opacity-40 ">{icon}</span>}
        <input
          type={type} placeholder={placeholder}
          className="outline-none w-full opacity-100"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}