import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='flex my-4 md:my-0'>
        <button className='bg-white text-black py-1 md:py-4 px-2 md:px-12 text-xl rounded-lg hover:bg-opacity-80'> Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg mx-2'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
