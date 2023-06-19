import React from 'react';
import { Helmet } from 'react-helmet';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const { user } = useAuth();

    return (
        <div className='w-full m-4'>
            <Helmet>
                <title>Admin User</title>
            </Helmet>
            <h3 className='text-3xl'>Hi, Welcome Back, {user.displayName}</h3>

        </div>
    );
};

export default UserHome;