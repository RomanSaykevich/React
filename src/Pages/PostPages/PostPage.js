import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Post from "../../Components/Post/Post";
import {getAllPosts} from "../../Store";

const PostPage = () => {
    const {posts, status, error} = useSelector(state => state['postReducer']);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getAllPosts())
  },[])

    return (
        <div>
            {status === "loading"&& <h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export default PostPage;