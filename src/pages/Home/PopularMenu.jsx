import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //             // console.log(popularItems);
    //         })
    // }, [])

    return (
        <div className='mb-8'>
            <SectionTitle subHeading='Popular Menu' heading='FROM OUR MENU' />
            <div className='grid md:grid-cols-2 gap-12'>
                {
                    popular.map((item, index) => <MenuItem key={index} item={item} />)
                }
            </div>
            <div className='text-center'>
            <button className="btn btn-outline border-0 border-b-2 ">View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;