import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../../Services/post.service/post.service";

const PostDetailsPage = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);

    const {state: posts} = useLocation();

    useEffect(()=>{
        if(posts){
            setPost(post)
            return
        }
        postService.getId(id)
            .then(value => setPost({...value}))
    },[])

    return (
        <div>
            {posts &&(
                <div>
                    <div>id - {posts.id}</div>
                    <div>userId - {posts.userId}</div>
                    <div>title - {posts.title}</div>
                    <div>body - {posts.body}</div>
                </div>
            )
            }
        </div>
    );
};

export default PostDetailsPage;