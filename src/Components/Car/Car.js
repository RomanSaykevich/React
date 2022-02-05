import React from 'react';
import {useDispatch} from "react-redux";

import {carToUpdate} from "../../Store";

const Car = ({car}) => {
    const {id, model, price, year} = car
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
                <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
            </div>
        </div>
    );
};

export default Car;