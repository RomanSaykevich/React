import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.services/user.service";
import User from "../User/User";

const Users = ({getDetails}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    return (

        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getDetails}/>)}
        </div>
    );
};

export default Users;