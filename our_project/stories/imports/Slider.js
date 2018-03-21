import React from 'react';

export default () => 
    <div>
        <section id="three" className="wrapper align-center">
		<div className="slider-holder">
        <span id="slider-image-1"></span>
        <span id="slider-image-2"></span>
        <span id="slider-image-3"></span>
        <div className="image-holder">
            <img src="banner.jpg" className="slider-image" />
            <img src="pic01.jpg" className="slider-image" />
            <img src="pic02.jpg" className="slider-image" />
        </div>
        <div className="button-holder">
            <a href="#slider-image-1" className="slider-change"></a>
            <a href="#slider-image-2" className="slider-change"></a>
            <a href="#slider-image-3" className="slider-change"></a>
        </div>
    </div>
			</section>

    </div>