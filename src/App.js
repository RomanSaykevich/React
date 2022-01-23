import React from 'react';
import {Route, Routes} from "react-router-dom";


import UserPage from "./Pages/UserPage/UserPage";
import PostPage from "./Pages/PostPage/PostPage";
import Collection from "./Components/Collection/Collection";
import UserDetailsPage from "./Pages/DetailsPage/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./Pages/DetailsPage/PostDetailsPage/PostDetailsPage";
import PostUser from "./Components/PostUser/PostUser";
import PostComment from "./Components/PostComment/PostComment";
import AlbomsPage from "./Pages/AlbomsPage/AlbomsPage";
import Photos from "./Components/Photos/Photos";


const App = () => {
    return (
        <div>

            <Routes>

                <Route path={'/'} element={<Collection/>}>

                    <Route path={'users'} element={<UserPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<PostUser/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<AlbomsPage/>}>
                            <Route path={':albums/photos'} element={<Photos/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostComment/>}/>
                        </Route>
                    </Route>

                </Route>

            </Routes>

        </div>

    );
};

export default App;
