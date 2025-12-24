import React from 'react'
import logo from '../../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";

const LeftSideBar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <img className='ml-8' src={logo} alt="Logo" width={40} />
      </div>
      <div className="border-r-2 border-black-100 h-screen bg-white-100 pt-2 pb-2 pl-6 pr-8 ">
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <FaHome size="24px" />
          <h1 className='font-bold ml-2'>Home</h1>

        </div>
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <CiSearch size="24px" />
          <h1 className='font-bold ml-2'>Explore</h1>

        </div>
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <CiBellOn size="24px" />
          <h1 className='font-bold ml-2'>Notifications</h1>

        </div>
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <CgProfile size="24px" />
          <h1 className='font-bold ml-2'>Profile</h1>

        </div>
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <CiBookmark size="24px" />
          <h1 className='font-bold ml-2'>Bookmarks</h1>

        </div>
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <TiMessage size="24px" />
          <h1 className='font-bold ml-2'>Message</h1>

        </div>
        <div className='flex items-center muy-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>

          <LuLogOut size="24px" />
          <h1 className='font-bold ml-2'>Logout</h1>

        </div>
        <button className='mt-1 px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>

      </div>

    </div>

  )
}

export default LeftSideBar