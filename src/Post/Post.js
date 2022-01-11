import React from 'react';

const Post = (props) => {
    const {id, title, body} = props;

    return (
        <div>
            {id}. {title}
            {body}
        </div>
    );
};

export default Post;