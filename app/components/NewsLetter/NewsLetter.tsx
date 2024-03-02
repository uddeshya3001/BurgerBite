import React from 'react'

const NewsLetter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
          join for hot offfers
        </h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, optio? Consequatur nostrum hic culpa libero iusto dolor cum veritatis itaque, provident in ipsa magni fugiat deleniti. Explicabo saepe dolores quo.
        </p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
          {/* input */}
          <input type='email' placeholder='Email Address'
            className="px-5 py-4 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black" />
          {/* Subscribe Button */}
          <button className="px-8 py-3 bg-green-700 hover:bg-green-900 transition-all duration-200 text-white rounded-md font-bold">Subscribe</button>

        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
