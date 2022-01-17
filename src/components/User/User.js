import React from 'react';

import useCss from './useCss.css'

const User = ({user}) => {

    const {id, name, username, email} = user;
    return (
        <div className={'useCss'}>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>username - {username}</div>
            <div>email - {email}</div>
        </div>
    );
};

export default User;