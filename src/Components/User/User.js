import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user
    return (
        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>Email - {email}</div>
        </div>
    );
};

export default User;