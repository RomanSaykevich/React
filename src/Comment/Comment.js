import React from 'react';

const Comment = (props) => {
    const {id,  name, email, body} = props;

    return (
        <div>
            {id}. {name} -- {email}
            {body}
        </div>
    );
};

export default Comment;