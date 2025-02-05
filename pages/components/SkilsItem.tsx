import React from 'react'

interface Props {
  title: string;
  year: string;
}

const SkilsItem = ({ title, year }: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
      <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'>
        {year}
      </span>
      <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
        {title}
    </h1>
    <p className='text-[#aaaaaa]'>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Accusamus illo minima omnis. 
        Illo vero officia vitae totam optio voluptatibus aperiam possimus quod ratione, 
        sequi, laborum eveniet eum? Dicta, doloremque. Distinctio.
    </p>
    </div>
  )
}

export default SkilsItem;
