import React from 'react'

import { FaBurger, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {

    return (
        <div className="pt-[5rem] pb-[3rem] bg-gray-900">
            <div className=" w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-start">
                {/* 1st part */}
                <div>
                    {/* Logo */}
                    <div className="flex items-center text-white space-x-2">
                        <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" /> <h1 className="text-[20px] sm:text-[30px] font-semibold">
                            BurgerBite
                        </h1>
                    </div>
                    <p className='text-white text-opacity-60 mt-[0.4rem] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima vero nesciun
                    </p>
                    <p className="mt-[1rem] text-white">support@example.com</p>
                    < p className="text-red-300 text-[19px] font-bold">

                        +(123) 2346 87378
                    </p>
                </div>
                {/* 2nd part */}
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Products</h1>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Mister Burger</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Patty Planet</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Maharaja</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Beef Bite</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Hangry Burger</p>

                </div>
                {/* 3rd part */}

                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] text-white">Quick Link</h1>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Home</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">About</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Menu</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">Products</p>
                    <p className="mt-[0.7rem]
text-white opacity-60 hover:text-yellow-300 transition-all 
cursor-pointer w-fit">NewsLetter</p>

                </div>

                {/* 4th part */}
                <div>
                    <h1 className="text-[23px] font-semibold mb-[2rem] uppercase text-white">Opening Hours</h1>
                    <p className='text-white text-[18px] '>Monday - Friday <span className='text-yellow-300'>8am - 4pm</span></p>
                    <p className='text-white text-[18px] '>Saturday: <span className='text-yellow-300'>10am - 10pm</span></p>
                    <div className='flex items-center space-x-6 mt-[2rem]'>
                        <FaFacebook className='text-blue-500 w-[1.5rem] h-[1.5rem]' />
                        <FaInstagram className='text-red-400 w-[1.5rem] h-[1.5rem]' />
                        <FaTwitter className='text-blue-300 w-[1.5rem] h-[1.5rem]' />

                    </div>
                </div>



            </div>
            {/* Copyright */}
            <p className='text-center text-white text-opacity-50 mt-[1.5rem]  '>Copyright @ 2023 Uddeshya Aagre. All rights Reserved</p>
        </div>


    )
};



export default Footer