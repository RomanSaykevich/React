import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    const { id, title} = post

    return (
        <div>
            {id}. {title} <Link to={id.toString()} state={post}>Details</Link>
        </div>
    );
};

export default Post;