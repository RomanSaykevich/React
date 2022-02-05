import React from 'react';
import {Route, Routes} from "react-router-dom";

import Collections from "./Collection/Сollections";
import UserPages from "./Pages/UserPages/UserPages";
import {Cars} from "./Components";
import PostPage from "./Pages/PostPages/PostPage";
import CommentPages from "./Pages/CommentPages/CommentPages";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Collections/>}>
                    <Route path={'users'} element={<UserPages/>}/>
                    <Route path={'posts'} element={<PostPage/>}/>
                    <Route path={'comments'} element={<CommentPages/>}/>
                    <Route path={'cars'} element={<Cars/>}/>
                </Route>
            </Routes>
        </div>


    );
};

export default App;