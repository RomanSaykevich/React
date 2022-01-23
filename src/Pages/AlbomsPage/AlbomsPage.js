import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";


import Alboms from "../../Components/Alboms/Alboms";
import {userService} from "../../Services/user.service/user.service";

const AlbomsPage = () => {

    const {id} = useParams();

    const [albom, setAlbom] = useState([]);

    useEffect(() => {

        userService.getByUserAlbom(id)
            .then(value => setAlbom([...value]))
    }, [])

    return (
        <div>

            <div>
                {albom.map(albom => <Alboms key={albom.id} albom={albom}/> )}
            </div>

<Outlet/>
        </div>
    );
};

export default AlbomsPage;