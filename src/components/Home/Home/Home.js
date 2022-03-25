import React from 'react';
import Doctors from '../../Doctors/Doctors';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <OurServices></OurServices>
            <Doctors></Doctors>
        </>
    );
};

export default Home;