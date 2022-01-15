import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postService} from "./services/post.services/post.service";
import css from './users.css'

const App = () => {

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])


    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }

    const getUserId = (id) => {
        postService.getPostId(id).then(value => setPosts(value))

    }

    return (
        <div>
            <div  className={'users'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {posts && <Posts posts={posts}/>}
        </div>
    );
};

export default App;