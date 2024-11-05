import React from 'react'
import TestimonialSilder from './TestimonialSilder'

const Testimonial = () => {
  return (
    <div className='bg-[black] pt-[4rem] md:pt-[8rem] '>
        <h1 className='heading'>
            Client <span className='text-yellow-400'>Review</span>
        </h1>
        <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
            <TestimonialSilder/>
        </div>
    </div>
  )
}

export default Testimonial