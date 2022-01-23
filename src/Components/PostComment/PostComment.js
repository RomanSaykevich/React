import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../Services/post.service/post.service";
import PostCommentDetailsPage from "../../Pages/DetailsPage/PostCommentDetailsPage/PostCommentDetailsPage";
import postss from './postss.css'

const PostComment = () => {

    const {id} = useParams();

    const [postComment, setPostComment] = useState([])

    useEffect(()=>{

        postService.getByPostComment(id)

            .then(value => setPostComment([...value]))

    },[])

    return (
        <div className={'postss'}>
            {postComment.map(postComment => <PostCommentDetailsPage key={postComment} postComment={postComment}/>)}
        </div>
    );
};

export default PostComment;