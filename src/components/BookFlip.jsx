import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import imagage from "../assets/bookCover.jpg";

const BookFlip = (props) => {
    return (
        <HTMLFlipBook width={300} height={500}>
            <div className="demoPage">
                <img src={imagage} alt='xs'/>
                </div>
            <div className="demoPage">
            <img src={imagage} alt='xs'/>
            </div>
            <div className="demoPage">
            <img src={imagage} alt='xs'/>
            </div>
            <div className="demoPage">
            <img src={imagage} alt='xs'/>
            </div>
        </HTMLFlipBook>
    );
}

export default BookFlip
