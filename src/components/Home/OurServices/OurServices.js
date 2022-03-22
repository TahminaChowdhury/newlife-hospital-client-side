import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurServices.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const OurServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='m-5'>
            <div className='row'>

                {/* Departments list */}

                <div className='col-sm-12 col-md-3 col-lg-3'>
                    <div className='departments-list text-white'>
                        <div className='py-4 px-5'>
                            <h4>Departments</h4>
                            <div className='pb-1 pt-2'>
                                <Link to='/emergency'>Emergency</Link>
                            </div>
                            <div className='pb-1'>
                                <Link to='/cardiology'>Cardiology</Link>
                            </div>
                            <div className='pb-1'>
                                <Link to='/cancer-surgery'>Cancer Surgery</Link>
                            </div>
                            <div className='pb-1'>
                                <Link to='/'>Diabetes & Endocrinology</Link>
                            </div>
                            <div className='pb-1'>
                                <Link to='/neuro-surgery'>NeuroSurgery</Link>
                            </div>
                            <div className='pb-1'>
                                <Link to='/plastic-surgery'>Plastic Surgery</Link>
                            </div>
                            <div className='pt-3'>
                                <Link to='/viewall'>View All</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our services */}

                <div className='col-sm-12 col-md-9 col-lg-9'>
                    <h3 className='pb-4'>Our Services</h3>
                    <Swiper
                        modules={[ Pagination ]}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            services.map(service => <SwiperSlide key={service.id}>
                                <div>
                                    <div className='service-card'>
                                        <div>
                                            <img src={service.img} alt="" className='img-fluid'/>
                                        </div>
                                        <div className='pt-4 pb-5'>
                                            <h5>{service.name}</h5>
                                            <p>{service.description.slice(0, 100)}...</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default OurServices;