import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto w-3/12 text-center my-8'>
            <p className='text-amber-500 mb-2 italic'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;