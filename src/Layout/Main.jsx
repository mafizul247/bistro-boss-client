import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import NavBer from '../pages/Shared/NavBer';

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
            { noHeaderFooter || <NavBer />}
            <div className='min-h-[calc(100vh)]'>
                <Outlet />
            </div>
            { noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;