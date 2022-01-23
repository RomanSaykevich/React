import React from 'react';
import {Link, Outlet} from "react-router-dom";

import Coll from './Coll.css'

const Collection = () => {
    return (
        <div className={'header2'}>
            <div className={'header3'}>
            <h2><Link to={'/users'}>Users</Link>  <Link to={'/posts'}>Posts</Link></h2>
            </div>
            <div>
            <Outlet/>
            </div>
        </div>
    );
};

export default Collection;