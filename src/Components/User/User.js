import React from 'react';
import {Link} from "react-router-dom";

import users from './users.css'
import Alboms from "../Alboms/Alboms";

const User = ({user}) => {

    const {id, name} = user


    return (
        <div className={'userss'}>
             {id}. {name} <Link to={id.toString()} state={{...user}}>Details</Link> <Link to={id+'/albums'} route={<Alboms/>}> Albums </Link>


        </div>
    );
};

export default User;