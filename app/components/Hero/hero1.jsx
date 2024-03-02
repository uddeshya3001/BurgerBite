import { useState } from 'react';

const ParagraphWithReadMore = ({ text }) => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <div className='display-inline-block'>
            <p className={` ${showFullText ? 'block' : 'line-clamp-2'} mt-[1rem] text-white text-opacity-70 text-[18px]`}>
                {text}
            </p>
            {showFullText ? (
                <button
                    onClick={toggleText}
                    className=" text-white text-opacity-90 text-[18px] hover:underline focus:outline-none"
                >
                    Hide...
                </button>
            ) : (
                <button
                    onClick={toggleText}
                    className=" text-white text-opacity-90 text-[18px] hover:underline focus:outline-none"
                >
                    Read More...
                </button>)
            }
        </div>
    );
};



export default ParagraphWithReadMore;
