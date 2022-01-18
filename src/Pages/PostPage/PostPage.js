import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../Services/post.service/post.service";
import Post from "../../Components/Post/Post";


const PostPage = () => {

    const [post, setPost] = useState([])

    useEffect(() => {
        postService.getAll()
            .then(value => setPost([value]))
    }, [])

    return (
        <div>
            <div>
                {post.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default PostPage;