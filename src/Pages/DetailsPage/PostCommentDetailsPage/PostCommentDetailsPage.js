import React from 'react';

import pcd from './pcd.css'

const PostCommentDetailsPage = ({postComment: {postId, id, name, email, body}}) => {

    return (
        <div className={'pcd'}>
            <div>postId - {postId}</div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>email - {email}</div>
            <div>body - {body}</div>
        </div>
    );
};

export default PostCommentDetailsPage;