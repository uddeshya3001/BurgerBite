"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import burgerImage1 from "@/public/images/b1.png"
import burgerImage2 from "@/public/images/b2.png"
import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';
import ParagraphWithReadMore from './hero1';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};



const Hero = () => {

    const paragraphText = "The Burger Bite, India is a modern casual dining cafe that exists to delight passionate cuisine lovers. Walk in and place your order and sit back and relax and soak in our modern to the age ambience as you wait for your order to be prepared. The Crunchy Bite Crispy Chicken topped with burger sauce, lettuce and spicy jalapeños. Order now to get it delivered at your door step.";

    return (
        <Carousel additionalTransfrom={0} arrows={false} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={true}>
            {/* 1st hero slide */}
            <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 md:clip_path '>

                <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                    <Image src={burgerImage1} alt="Burger 1" className='hidden md:block' />
                    <div >
                        <h1 className='text-[40px] font-semibold text-yellow-400 '>
                            Fast Food Burger</h1>
                        <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold '>Best <br />Burgers</h1>
                        {/* <p className='mt-[1rem] text-white text-opacity-70 text-[18px] '>{paragraphText}</p> */}

                        <ParagraphWithReadMore text={paragraphText} />

                        <button className=' mt-[2rem]  px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex items-center space-x-2 rounded-md text-white'>
                            <span>
                                <BiCycling className='w-[1.3rem] h-[1.7rem]' />
                            </span>
                            <span className='font-bold'>
                                Order Now
                            </span>

                        </button>
                    </div>
                </div>
            </div>

            {/* 2nd Slide */}
            <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 md:clip_path '>

                <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                    <Image src={burgerImage2} alt="Burger 1" className='hidden md:block' />
                    <div >
                        <h1 className='text-[40px] font-semibold text-yellow-400 '>
                            Tasty Burger</h1>
                        <h1 className='text-[90px] leading-[5rem] uppercase text-white font-bold '>Top <br />Burgers</h1>
                        <p className='mt-[1rem] text-white text-opacity-70 text-[18px] '>The Burger Bite, India is a modern casual dining cafe that exists to delight passionate cuisine lovers. Walk in and place your order and sit back and relax and soak in our modern to the age ambience as you wait for your order to be prepared. </p>


                        <button className=' mt-[2rem]  px-8 py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-700 flex items-center space-x-2 rounded-md text-white'>
                            <span>
                                <BiCycling className='w-[1.3rem] h-[1.7rem]' />
                            </span>
                            <span className='font-bold'>
                                Order Now
                            </span>

                        </button>
                    </div>
                </div>
            </div>

        </Carousel>
    )
}


export default Hero