import React from 'react';

const PhotoDetailsPage = ({photos: {albumId, id, title, url, thumbnailUrl}}) => {
    return (
        <div>
            <div>albumId - {albumId}</div>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <div><img src={url} alt="url"/></div>
            <div><img src={thumbnailUrl} alt="thumbnailUrl"/></div>
        </div>
    );
};

export default PhotoDetailsPage;