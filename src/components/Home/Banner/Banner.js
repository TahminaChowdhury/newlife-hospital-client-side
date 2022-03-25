import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/img-1.webp'
import img2 from '../../../images/img-2.webp'
import img3 from '../../../images/img-3.webp'

const Banner = () => {
    return (
        <div className='carousel-container mb-5 pb-5'>
            <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default Banner;