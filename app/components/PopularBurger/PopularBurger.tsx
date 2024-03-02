"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCard from './BurgerCard';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const PopularBurger = () => {
    return (
        <div className='pt-[3rem] pb-[3rem]  '>
            <h1 className='heading'>
                Our Popular <span className='text-red-600'>Burgers</span>
            </h1>
            <div className='w-[80%] mt-[4rem] mx-auto '>
                <Carousel
                    additionalTransfrom={0}
                    arrows={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    centerMode={false}
                    infinite
                    responsive={responsive} itemClass='item'
                    showDots={false}>

                    {/* Burger card component */}
                    <BurgerCard title="Beefy Bite" image='/images/b1.png' reviews="6" price="$9.99" desc="The cult favorite from the NYC-based chain is the rock star of veggie burgers. Thanks to breaded portobellos and the delicious shake sauce, we bet you won't even miss the meat." />
                    <BurgerCard title="Avalanche Burger" image='/images/b2.png' reviews="45" price="$12" desc=" Burgers are made with ground lamb meat. They tend to have a distinct, rich flavour and are sometimes seasoned with herbs, such as rosemary, mint or cumin." />
                    <BurgerCard title="Mister Burger" image='/images/b3.png' reviews="80" price="$8.55" desc="Made with ground chicken meat, which can be seasoned with various herbs and spices to give them a unique flavour." />
                    <BurgerCard title="Hangry Burger" image='/images/b4.png' reviews="74" price="$9.99" desc="In the Upper Midwest, particularly Wisconsin, burgers are often made with a buttered bun, butter as one of the ingredients of the patty or with a pat of butter on top of the burger patty." />
                    <BurgerCard title="Patty Planet" image='/images/b5.png' reviews="122" price="$6.99" desc="A Carolina-style hamburger with everything may be served with cheese, chili, onions, mustard, and cole slaw." />
                    <BurgerCard title="Grill House" image='/images/b6.png' reviews="21" price="$15.99" desc="Burger topped with roasted New Mexico green chiles. Many places around New Mexico serve variations of this burger." />
                    <BurgerCard title="Billy Cheese" image='/images/b7.png' reviews="99" price="$20.99" desc="Primarily refers to small hamburgers, but can also cover any small sandwich served on a slider roll" />
                    <BurgerCard title="Buns of Anarchy" image='/images/b8.png' reviews="20" price="$8.99" desc="If you've ever eaten at Shake Shack and wondered just what makes their burgers so good, we've got the intel for you: It's the sauce!" />
                    <BurgerCard title="Maharaja" image='/images/b9.png' reviews="9" price="$7.99" desc="The Maharaja commonly consists of one or more patties, topped with a distinct chili sauce, tomatoes, lettuce and a large amount of mayonnaise and mustard with fresh-cut fries." />


                </Carousel>
            </div>
        </div>
    )
}

export default PopularBurger