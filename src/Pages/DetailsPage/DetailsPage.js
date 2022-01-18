import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {userService} from "../../Services/user.service/user.service";

const DetailsPage = () => {

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
    }, [])

    return (
        <div>
            {user && (
                <div>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                    <div>username:{user.username}</div>
                    <div>email:{user.email}</div>
                    <div>address:{user.street}</div>
                    <div>address:{user.suite}</div>
                    <div>address:{user.city}</div>
                    <div>address:{user.zipcode}</div>
                    <div>address:{user.lat}</div>
                    <div>address:{user.lng}</div>
                    <div>phone:{user.phone}</div>
                    <div>website:{user.website}</div>
                    <div>company:{user.name}</div>
                    <div>company:{user.catchPhrase}</div>
                    <div>company:{user.bs}</div>
                </div>
            )
            }

        </div>
    );
};

export default DetailsPage;