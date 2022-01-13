import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services/user.services/user.service";
import Posts from "../Posts/Posts";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const getUsersId = (id) => {
        userService.getId(id)
            .then(value => setUser(value))
    }

    return (
        <div className={'conteiner'}>

            <div className={'users'}>{users.map(value => <User key={value.id} user={value}
                                                               getUserId={getUsersId}/>)}</div>

            {user && <div className={'userDetals'}>
                {user.id}. {user.name} {user.username}
                <br/> email - {user.email}
                <br/> address: street - {user.address.street}
                <br/> suite - {user.address.suite}
                <br/> city - {user.address.city}
                <br/> zipcode - {user.address.zipcode}
                <br/> address geo: lat - {user.address.geo.lat}
                <br/> lng - {user.address.geo.lng}
                <br/> phone - {user.phone}
                <br/> website - {user.website}
                <br/> company name: - {user.company.name}
                <br/> catchPhrase - {user.company.catchPhrase}
                <br/> bs - {user.company.bs}

            </div>}

            <Posts/>
        </div>

    );
};

export default Users;