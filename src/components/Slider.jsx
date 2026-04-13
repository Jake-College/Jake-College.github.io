import React, {useState, useEffect} from 'react';

const Slider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // const autoScroll = () => {
    //     if (currentIndex === slides.length -1) {
    //         return setCurrentIndex(0);
    //     }
    //     return setCurrentIndex(currentIndex + 1);
    // }
    
    const buttonPush = (evt) => {
        if (evt.target.className === "fa-solid fa-circle-arrow-right") {
            if (currentIndex === slides.length -1) {
                return setCurrentIndex(0);
            }
            return setCurrentIndex(currentIndex + 1);
        }
        else if (evt.target.className === "fa-solid fa-circle-arrow-left") {
            if (currentIndex === 0) {
                return setCurrentIndex(slides.length -1);
            }
            return setCurrentIndex(currentIndex - 1);
        }
    }
    
    
    // useEffect(() => {
    //     const interval = setInterval(() => {autoScroll()}, 3000);
    //     return () => clearInterval(interval);
    // })
    
    return (
        <div className = "image-slider">
                <button className = "Left-Button">
                    <i class="fa-solid fa-circle-arrow-left" onClick={buttonPush}></i>
                </button>
                <button className = "Right-Button">
                    <i className = "fa-solid fa-circle-arrow-right" onClick={buttonPush}></i>
                </button>
            <ul>
                {slides.map((slide, index) => (
                    <li key = {index} className = {index === currentIndex ? "active" : ""}>
                        <img 
                            src = {slide.src} 
                            alt = {slide.alt} 
                            style = {{
                                transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 3}rem))`
                            }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Slider;