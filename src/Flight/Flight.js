import React from 'react';

const Flight = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div className={'fig'}>
            <div className={'fit'}>
                <h3>{mission_name}</h3>  {launch_year}
            </div>
            <img src={mission_patch_small} alt={mission_patch_small}/>
        </div>
    );
};

export default Flight;