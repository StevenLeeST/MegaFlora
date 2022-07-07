import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MainSlider() {
    //Script
    const settings = {
        lazyLoad: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Slider {...settings} style={{ width: '90%' ,margin: 'auto'}}>
            <div>
                <img style={{ width: '100%', padding: '5px'}} src="https://i.ytimg.com/vi/ssfuvE-8dRk/maxresdefault.jpg" />
            </div>
            <div>
                <img style={{ width: '100%', padding: '5px'}} src="https://stringfixer.com/files/12579401.jpg" />
            </div>
            <div>
                <img style={{ width: '100%', padding: '5px'}} src="https://i.pinimg.com/originals/01/4c/cf/014ccf7549554c496c6099c4f4f1a6fc.jpg" />
            </div>
            <div>
                <img style={{ width: '100%', padding: '5px'}} src="https://i.pinimg.com/originals/52/7c/02/527c02710a3459f5c06f1364255b696c.jpg" />
            </div>
            <div>
                <img style={{ width: '100%', padding: '5px'}} src="https://i.ytimg.com/vi/UB9RcKVOkWE/maxresdefault.jpg" />
            </div>
            <div>
                <img style={{ width: '100%', padding: '5px'}} src="https://stringfixer.com/files/12579433.jpg" />
            </div>
        </Slider>
    )
}

export { MainSlider };