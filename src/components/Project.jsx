import React from 'react'

const Project = () => {
  return (
    <div className="flex-wrap items-center justify-between py-10  space-y-14 sm:flex sm:space-y-0">
        <p className='text-2xl' >title</p>
        <div className='flex gap-5 mt-2 text-sand'>
            <span>tag1</span>
            <span>tag2</span>
            <span>tag3</span>
        </div>
        <button className='flex items-center gap-1 cursor-none hover-animation'>
            Read More
            <img src="assets/arrow-right.svg" className='w-5' />
        </button>
    </div>
  )
}

export default Project