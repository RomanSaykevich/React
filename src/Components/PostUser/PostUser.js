import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../Services/user.service/user.service";
import PostUserDetailsPage from "../../Pages/DetailsPage/PostUserDetailsPage/PostUserDetailsPage";
import fixx from "./fixx.css"

const PostUser = () => {

    const {id} = useParams();

    const [userPost, setUserPost] = useState([])

    useEffect(()=>{

        userService.getByPostUser(id)

            .then(value => setUserPost([...value]))

    },[])

    return (
        <div className={'fix'}>

            {userPost.map(userPost => <PostUserDetailsPage key={userPost.id} userPost={userPost}/>)}

        </div>
    );
};

export default PostUser;