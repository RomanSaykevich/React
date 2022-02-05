import React from 'react';
import {Link, Outlet} from "react-router-dom";

import cont from "./cont.css"

const Collections = () => {
    return (
        <div>
            <div>
                <h2>
                    <div className={'container'}>

                        <div>
                            <Link to={'/users'}>Users</Link>
                        </div>

                        <div>
                            <Link to={'/posts'}>Post</Link>
                        </div>

                        <div>
                            <Link to={'/comments'}>Comments</Link>
                        </div>

                        <div>
                            <Link to={'/cars'}>Cars</Link>
                        </div>

                    </div>
                </h2>
                <Outlet/>
            </div>
        </div>
    );
};

export default Collections;