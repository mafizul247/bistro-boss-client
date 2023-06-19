import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed p-2 md:p-8 text-white mt-16'>
            <SectionTitle subHeading='Check it out' heading='Featured Item' />
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 py-8 px-16 md:space-x-8'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem dignissimos quia doloribus saepe laudantium voluptatibus aspernatur nisi quasi officiis quos repudiandae a, porro sint earum possimus repellat! Laboriosam veritatis nulla accusamus. Ipsam itaque corrupti sint eius a eos laborum, blanditiis optio aut. Fuga doloribus corrupti praesentium eum nulla molestiae?</p>
                    <button className="btn btn-outline border-0 border-b-2 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;