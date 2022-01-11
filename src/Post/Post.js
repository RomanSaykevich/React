import React from 'react';

const Post = (props) => {
    const {id, title, body} = props;

    return (
        <div>
            {id}. {title}
<br/>
            {body}
            <hr/>
        </div>
    );
};

export default Post;