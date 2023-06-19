import React from 'react';
import MenuItem from '../Shared/MenuItem';
import Cover from '../Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className='my-8'>
            {title && <Cover img={img} title={title} />}
            <div className='grid md:grid-cols-2 gap-12 my-12'>
                {
                    items.map((item, index) => <MenuItem key={index} item={item} />)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`} >
                    <button className="btn btn-outline border-0 border-b-2 ">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;