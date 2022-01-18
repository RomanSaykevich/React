import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../Services/user.service/user.service";
import User from "../../Components/User/User";


const UserPage = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUser([...value]))
    },[])

    return (
        <div>

            <div>
                {user.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserPage;