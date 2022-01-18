import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../../Services/user.service/user.service";

const UserDetailsPage = () => {

    const {id} = useParams();

    const [user, setUser] = useState([])

    const {state: users} = useLocation();

    useEffect(() => {
        if (users){
            setUser(user)
            return
        }
        userService.getId(id)
            .then(value => setUser({...value}))
    }, [])

    return (
        <div>
            {users && (
                <div>
                    <div>id - {users.id}</div>
                    <div>name - {users.name}</div>
                    <div>username - {users.username}</div>
                    <div>email - {users.email}</div>
                    <div>address: street - {users.address.street}</div>
                    <div>suite - {users.address.suite}</div>
                    <div>city - {users.address.city}</div>
                    <div>zipcode - {users.address.zipcode}</div>
                    <div>geo: lat - {users.address.geo.lat}</div>
                    <div>lng - {users.address.geo.lng}</div>
                    <div>phone:{users.phone}</div>
                    <div>website:{users.website}</div>
                    <div>company: name - {users.company.name}</div>
                    <div>catchPhrase - {users.company.catchPhrase}</div>
                    <div>bs - {users.company.bs}</div>

                </div>
            )
            }

        </div>
    );
};

export default UserDetailsPage;