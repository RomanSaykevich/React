import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postService} from "./services/post.services/post.service";
import css from './users.css'

const App = () => {

    const [users, setUsers] = useState(null)
    const [postInfo, setPostInfo] = useState([])


    const getUser = (user) => {
        setUsers(user)
        setPostInfo([])
    }

    const getUserId = (id) => {
        postService.getPostId(id)
            .then(value => setPostInfo(value))

    }

    return (

        <div>
            <div className={'users'}>
                <Users getDetails={getUser}/>
                {users && <UserDetails user={users} getUserId={getUserId}/>}

            </div>

            {postInfo && <Posts posts={postInfo}/>}

        </div>
    );
};

export default App;