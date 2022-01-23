import React from 'react';

import index from './index.css'

const PostUserDetailsPage = ({userPost: {userId, id, title, body}}) => {

    return (

        <div className={'index'}>
            <div>userId - {userId}</div>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
        </div>
    );
};

export default PostUserDetailsPage;