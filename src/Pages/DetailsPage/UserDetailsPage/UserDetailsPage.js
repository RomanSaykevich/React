import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../../Services/user.service/user.service";
import PostUser from "../../../Components/PostUser/PostUser";
import usercss from "./usercss.css"

const UserDetailsPage = () => {

    const {id} = useParams();

    const [user, setUser] = useState([])

    const {state} = useLocation();

    useEffect(() => {
        if (state){
            setUser(state)
            return
        }
        userService.getId(id)
            .then(value => setUser({...value}))
    }, [id])

    return (
        <div className={'detUandP'}>
            {user && (
                <div>
                    <div>id - {user.id}</div>
                    <div>name - {user.name}</div>
                    <div>username - {user.username}</div>
                    <div>email - {user.email}</div>
                    <div>address: street - {user.address?.street}</div>
                    <div>suite - {user.address?.suite}</div>
                    <div>city - {user.address?.city}</div>
                    <div>zipcode - {user.address?.zipcode}</div>
                    <div>geo: lat - {user.address?.geo?.lat}</div>
                    <div>lng - {user.address?.geo?.lng}</div>
                    <div>phone:{user.phone}</div>
                    <div>website:{user.website}</div>
                    <div>company: name - {user.company?.name}</div>
                    <div>catchPhrase - {user.company?.catchPhrase}</div>
                    <div>bs - {user.company?.bs}</div>


                </div>
            )
            }
                <div>
                <Link to={'posts'} route={<PostUser/>}> <button>Posts </button> </Link>
                </div>

                <Outlet/>


        </div>
    );
};

export default UserDetailsPage;