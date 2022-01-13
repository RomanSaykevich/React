import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {postService} from "../../services/post.services/post.service";
// import Users from "../Users/Users";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getPlus()
            .then(value => setPosts(value))
    }, [])
    const getPostsId = (id) => {
        postService.getPlusId(id)
            .then(value => setPost(value))
    }
    return (
        <div>
            <div> {posts.map(value => <Post key={value.id} post={value}
                                            getPostId={getPostsId}/>)}  </div>
            {post && <div> {post.id} {post.title} </div>}
        </div>
    );
};

export default Posts;