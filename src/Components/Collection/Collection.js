import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Collection = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Outlet/>
        </div>
    );
};

export default Collection;