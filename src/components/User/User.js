import React from 'react';

const User = ({user: {id, name, username}, getUserId}) => {

    return (
        <div>
            {id}. {name} {username}
            <button onClick={() => getUserId(id)}>GetDetails</button>
        </div>
    );
};

export default User;