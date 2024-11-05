import React from 'react'
import Image from 'next/image'
import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'

const Blog = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='heading'>
            MY
            <span className='text-yellow-400'> BLOG</span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto'>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image
                    src='/image/blog3.jpg'
                    alt='blog'
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        December 10, 2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-[1rem] md:space-x-4 space-y-3 md:space-y-0'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[2.3rem] h-[2.3rem] text-[#55e65a]'/>
                            <p className='text-white'>By Oyar</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[2rem] h-[2rem] text-[#55e65a]'/>
                            <p className='text-white'>Comments(99+)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                        Next js Fullstack Development
                    </p>
                </div>
            </div>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image
                    src='/image/blog2.jpg'
                    alt='blog'
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        November 13, 2024
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-[1rem] md:space-x-4 space-y-3 md:space-y-0'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[2.3rem] h-[2.3rem] text-[#55e65a]'/>
                            <p className='text-white'>By Chici</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[2rem] h-[2rem] text-[#55e65a]'/>
                            <p className='text-white'>Comments(19)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                        React js New Features
                    </p>
                </div>
            </div>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <Image
                    src='/image/blog1.jpg'
                    alt='blog'
                    layout='fill'
                    className='object-cover'
                    />
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem]'>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                        July 10, 2022
                    </div>
                    <div className='flex flex-col md:flex-row items-center justify-center mt-[1rem] md:space-x-4 space-y-3 md:space-y-0'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[2.3rem] h-[2.3rem] text-[#55e65a]'/>
                            <p className='text-white'>By Sukirman</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[2rem] h-[2rem] text-[#55e65a]'/>
                            <p className='text-white'>Comments(12)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                        Next js New Features
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
