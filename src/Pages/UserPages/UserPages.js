import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import User from "../../Components/User/User";
import {getAllUsers} from "../../Store";

const UserPages = () => {
    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    return (
        <div>
            {status==="loading"&& <h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UserPages;