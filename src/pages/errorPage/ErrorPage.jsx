// import React from 'react';

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div >
            404 not Found
            <Link to='/'> <button className="btn btn-primary ">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;