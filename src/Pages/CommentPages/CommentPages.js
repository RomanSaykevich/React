import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../Store";
import Comment from "../../Components/Comment/Comment";

const CommentPages = () => {

        const {comments, status, error} = useSelector(state => state['commentReducer']);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getAllComments())
        }, [])

        return (
            <div>
                {status === "loading" && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    };


export default CommentPages;