import React from 'react';

const Post = ({post}) => {
    const {userId, id, title} = post
    return (
        <div>
            <div>UserId - {userId}</div>
            <div>Id - {id}</div>
            <div>Title - {title}</div>
        </div>
    );
};

export default Post;