// import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mt-9">
            <h1 className="text-2xl text-center font-bold">{heading}</h1>
            <p className="text-lg my-3 mx-auto w-2/3">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;