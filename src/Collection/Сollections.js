import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Collections = () => {
    return (
        <div>
            <div>
                <h2>
                    <Link to={'/users'}>Users</Link>
                    <Link to={'/posts'}>Post</Link>
                    <Link to={'/comments'}>Comments</Link>
                    <Link to={'/cars'}>Cars</Link>
                </h2>
                <Outlet/>
            </div>
        </div>
    );
};

export default Collections;