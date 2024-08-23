// import React from 'react';

import SectionTitle from "../../../shareComponent/sectionTitle/SectionTitle";
import feature from '../../../../public/assets/home/featured.jpg'
import './Feature.css'

const Features = () => {
    return (
        <div className="featured-item bg-fixed text-white mt-10">
            <SectionTitle heading={'Features Paralax'} subHeading={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}  ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center mt-7 py-8 px-16 gap-6">
                <div>
                    <img src={feature} alt="" />
                </div>

                <div className="md:mt-6">
                    <p>Aug 20,2025</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit earum nostrum repellendus, repellat aliquam officia cupiditate esse architecto tempora illo aut, animi voluptate. Suscipit, cumque deserunt exercitationem ex expedita voluptatem.</p>

                    <button className="btn border-0 border-b-4 btn-outline">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Features;