import {Link} from "react-router-dom";

import Photos from "../Photos/Photos";

const Alboms = ({albom}) => {

    const {id, userId, title} = albom

    return (
        <div>
            {id}. {userId} {title} <Link to={id + '/photos'} route={<Photos/>}>Albom</Link>

        </div>
    );
};

export default Alboms;