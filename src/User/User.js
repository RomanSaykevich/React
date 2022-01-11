import React from 'react';

const User = (props) => {
    const {id, name, surname, email} = props;

    return (
        <div>
            {id}.  {name}  {surname} - {email}
            <hr/>
        </div>
    );
};

export default User;