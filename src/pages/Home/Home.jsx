import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';

const Home = () => {
    useTitle('Home');

    return (
        <div>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;