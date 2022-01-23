import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../../Services/post.service/post.service";
import PostComment from "../../../Components/PostComment/PostComment";
import postd from './postd.css'

const PostDetailsPage = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);

    const {state} = useLocation();

    useEffect(()=>{
        if(state){
            setPost(state)
            return
        }
        postService.getId(id)
            .then(value => setPost({...value}))
    },[])

    return (
        <div className={'postd'}>
            {post &&(
                <div>
                    <div>id - {post.id}</div>
                    <div>userId - {post.userId}</div>
                    <div>title - {post.title}</div>
                    <div>body - {post.body}</div>
                </div>
            )
            }
            <div className={'postcomment'}>
                <Link to={'comments'} route={<PostComment/>}><button> Comments</button></Link>
            </div>

            <Outlet/>
        </div>
    );
};

export default PostDetailsPage;