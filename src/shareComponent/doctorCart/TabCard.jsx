// import React from 'react';

import DoctorCart from "./DoctorCart";

const TabCard = ({specialtyDoctor}) => {
    return (
        <div className="grid md:grid-cols-2 gap-10">
                            {
                                specialtyDoctor.map(doctor =>
                                    <DoctorCart
                                        key={doctor._id}
                                        doctor={doctor}>

                                    </DoctorCart>
                                )
                            }
                        </div>
    );
};

export default TabCard;