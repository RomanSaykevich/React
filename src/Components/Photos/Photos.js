import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../Services/user.service/user.service";
import PhotoDetailsPage from "../../Pages/PhotoDetailsPage/PhotoDetailsPage";

const Photos = () => {

    const {id} = useParams();

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        userService.getByUserPhotos(id)
            .then(value => setPhotos([...value]))
    }, []);

    return (
        <div>
            {photos.map(photos => <PhotoDetailsPage key={photos.id} photos={photos}/>)}
        </div>
    );
};

export default Photos;