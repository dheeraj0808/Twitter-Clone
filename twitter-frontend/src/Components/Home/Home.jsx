import React from 'react'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import Feed from '../Feed/Feed'
import RightSideBar from '../RightSideBar/RightSideBar'

const Home = () => {
  return (
    <>
      <div className='flex justify-between w-[90%] mx-auto'>
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    </>
  )
}

export default Home